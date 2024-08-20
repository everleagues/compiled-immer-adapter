import { createDraft, finishDraft } from 'immer';

class ImmutableStateContext {
    ctx;
    frozenState = null;
    constructor(ctx) {
        this.ctx = ctx;
        ImmutableStateContext.autobindStateContext(this);
    }
    static autobindStateContext(context) {
        for (const prop of Object.getOwnPropertyNames(Object.getPrototypeOf(context))) {
            if (prop === 'constructor' || typeof context[prop] !== 'function') {
                continue;
            }
            context[prop] = context[prop].bind(context);
        }
    }
    getState() {
        this.frozenState = createDraft(this.ctx.getState());
        return this.frozenState;
    }
    setState(val) {
        let state;
        if (typeof val === 'function') {
            let newState;
            const oldState = createDraft(this.ctx.getState());
            const operator = val;
            const mutatedOldState = operator(oldState);
            if (this.frozenState === mutatedOldState) {
                newState = finishDraft(this.frozenState);
                finishDraft(oldState);
            }
            else {
                const mutateOutsideOperator = oldState !== mutatedOldState;
                if (mutateOutsideOperator) {
                    newState = mutatedOldState;
                    finishDraft(oldState);
                }
                else {
                    newState = finishDraft(mutatedOldState);
                }
            }
            state = newState;
        }
        else {
            state = finishDraft(val);
        }
        this.frozenState = null;
        return this.ctx.setState(state);
    }
    patchState(val) {
        return this.ctx.patchState(finishDraft(val));
    }
    dispatch(actions) {
        return this.ctx.dispatch(actions);
    }
}

/**
 * @deprecated - use ImmutableContext instead Mutation
 */
function Mutation() {
    return function (_target, _key, descriptor) {
        const method = descriptor.value;
        descriptor.value = function (ctx, action, ...args) {
            return method.apply(this, [new ImmutableStateContext(ctx), action, ...args]);
        };
        return descriptor;
    };
}

// export { produce } from './produce';

function ImmutableContext() {
    return function (_target, _key, descriptor) {
        const method = descriptor.value;
        descriptor.value = function (ctx, action, ...args) {
            return method.apply(this, [new ImmutableStateContext(ctx), action, ...args]);
        };
        return descriptor;
    };
}

function ImmutableSelector() {
    return function (_target, _key, descriptor) {
        const method = descriptor.value;
        descriptor.value = function (state, ...args) {
            return method.apply(this, [createDraft(state), ...args]);
        };
        return descriptor;
    };
}

/**
 * Generated bundle index. Do not edit.
 */

export { ImmutableContext, ImmutableSelector, Mutation };
//# sourceMappingURL=ngxs-labs-immer-adapter.mjs.map
