import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/url/addQueryParams/addQueryParams';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

interface FetchArticleListProps {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticlesList',
        async (props, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const page = getArticlesPageNum(getState());
            const limit = getArticlesPageLimit(getState());
            const sort = getArticlesPageSort(getState());
            const order = getArticlesPageOrder(getState());
            const search = getArticlesPageSearch(getState());
            const type = getArticlesPageType(getState());

            try {
                addQueryParams({
                    sort, order, search, type,
                });

                const { data } = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type: type === ArticleType.ALL ? undefined : type,
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
