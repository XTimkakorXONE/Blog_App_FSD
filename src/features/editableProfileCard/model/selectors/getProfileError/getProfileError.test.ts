import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return err', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'err',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('err');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
