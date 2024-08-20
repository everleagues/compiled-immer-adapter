import { StateContext, StateOperator } from '@ngxs/store';
import { Observable } from 'rxjs';
export declare class ImmutableStateContext<T extends any> implements StateContext<T> {
    private ctx;
    private frozenState;
    constructor(ctx: StateContext<T>);
    private static autobindStateContext;
    getState(): T;
    setState(val: T | StateOperator<T>): void;
    patchState(val: Partial<T>): void;
    dispatch(actions: any | any[]): Observable<void>;
}
