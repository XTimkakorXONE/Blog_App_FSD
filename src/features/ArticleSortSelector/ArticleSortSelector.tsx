import {
    FC, memo, useCallback, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types/Sort/SortOrder';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
   className?: string
   sort: ArticleSortField
   order: SortOrder
   onChangeOrder: (newOrder: SortOrder) => void
   onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {
        className, onChangeOrder, onChangeSort, order, sort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Сортировать ПО')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
};
