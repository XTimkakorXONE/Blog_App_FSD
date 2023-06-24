import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
User,
LoginByUsernameProps,
ThunkConfig<string>
>(
    'login/loginByUsername',
    async ({ username, password }, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;

        try {
            const { data } = await extra.api.post('/login', {
                username, password,
            });

            if (!data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
            dispatch(userActions.setAuthData(data));

            return data;
        } catch (err) {
            console.log(err);
            return rejectWithValue('err');
        }
    },
);
