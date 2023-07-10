import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleList } from 'entities/Article';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageError, getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum, getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import cls from './ArticleInfiniteList.module.scss';

interface ArticleInfiniteListProps {
   className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);

    return (
        <div className={classNames(cls.ArticleInfiniteList, {}, [className])}>
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        </div>
    );
});
