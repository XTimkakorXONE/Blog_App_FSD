import { combineReducers } from '@reduxjs/toolkit';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { ArticlesDetailsPageSchema } from '../types';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticlesDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
