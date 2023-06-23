import { classNames } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, FC, ReactNode, memo,
} from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    PRIMARY = '',
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton
    disabled?: boolean
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.PRIMARY,
        square,
        disabled,
        size = SizeButton.M,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                {
                    [cls.square]: square,
                    [cls.disabled]: disabled,
                },
                [className, cls[theme], cls[size]],
            )}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
