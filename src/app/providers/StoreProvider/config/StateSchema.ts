import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ScrollSchema } from 'features/ScrollSave';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
    user: UserSchema
    scroll: ScrollSchema

    // async reducer
    profile?: ProfileSchema
    loginForm?: LoginSchema
    articleDetails?: ArticleDetailsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
    articleDetailsPage?: ArticlesDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg
    state: StateSchema
}
