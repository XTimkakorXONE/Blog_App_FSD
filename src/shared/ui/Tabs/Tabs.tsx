import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { ArticleType } from 'entities/Article';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (tab: ArticleType) => void;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        className, tabs, onTabClick, value,
    } = props;

    const clickHandle = useCallback((tab: ArticleType) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    className={cls.tab}
                    key={tab.value}
                    onClick={clickHandle(tab.value as ArticleType)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
