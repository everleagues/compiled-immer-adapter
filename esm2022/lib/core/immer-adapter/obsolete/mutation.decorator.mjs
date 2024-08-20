import { ImmutableStateContext } from '../common/immutable-state-context';
/**
 * @deprecated - use ImmutableContext instead Mutation
 */
export function Mutation() {
    return function (_target, _key, descriptor) {
        const method = descriptor.value;
        descriptor.value = function (ctx, action, ...args) {
            return method.apply(this, [new ImmutableStateContext(ctx), action, ...args]);
        };
        return descriptor;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0YXRpb24uZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGliL2NvcmUvaW1tZXItYWRhcHRlci9vYnNvbGV0ZS9tdXRhdGlvbi5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFMUU7O0dBRUc7QUFDSCxNQUFNLFVBQVUsUUFBUTtJQUN0QixPQUFPLFVBQVMsT0FBZSxFQUFFLElBQVksRUFBRSxVQUE4QjtRQUMzRSxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBRWhDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsVUFBUyxHQUFzQixFQUFFLE1BQVcsRUFBRSxHQUFHLElBQVc7WUFDN0UsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUkscUJBQXFCLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRSxDQUFDLENBQUM7UUFFRixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xuaW1wb3J0IHsgSW1tdXRhYmxlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vY29tbW9uL2ltbXV0YWJsZS1zdGF0ZS1jb250ZXh0JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCAtIHVzZSBJbW11dGFibGVDb250ZXh0IGluc3RlYWQgTXV0YXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE11dGF0aW9uKCk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKF90YXJnZXQ6IE9iamVjdCwgX2tleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpOiBQcm9wZXJ0eURlc2NyaXB0b3Ige1xuICAgIGNvbnN0IG1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24oY3R4OiBTdGF0ZUNvbnRleHQ8YW55PiwgYWN0aW9uOiBhbnksIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICByZXR1cm4gbWV0aG9kLmFwcGx5KHRoaXMsIFtuZXcgSW1tdXRhYmxlU3RhdGVDb250ZXh0KGN0eCksIGFjdGlvbiwgLi4uYXJnc10pO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfTtcbn1cbiJdfQ==