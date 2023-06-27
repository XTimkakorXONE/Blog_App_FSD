import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
    >(
        'articleDetails/fetchCommentsByArticleId',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            if (!articleId) {
                return rejectWithValue('error');
            }

            try {
                const { data } = await extra.api.get('/comments', {
                    params: {
                        articleId,
                        _expand: 'user',
                    },
                });

                if (!data) {
                    throw new Error();
                }

                return data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
