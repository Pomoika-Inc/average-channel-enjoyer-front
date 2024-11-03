import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, selectCurrentTheme } from '../model/themeSlice';
import type { Theme } from '../model/types';

type Props = {
    theme?: Theme
    children: React.ReactNode
}

export function ThemeProvider({ children, theme }: Props) {
    const currentTheme = useSelector(selectCurrentTheme);
    const dispatch = useDispatch();

    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    //@ts-ignore
    const tgTheme = isLocalhost ? 'dark' : window.Telegram?.WebApp?.colorScheme === 'dark' ? 'dark' : 'light';
    useEffect(() => {
        const newTheme = theme || tgTheme

        if (newTheme !== currentTheme) {
            dispatch(changeTheme(newTheme as Theme));
        }

        document.documentElement.setAttribute('data-theme', newTheme);
    }, [currentTheme, theme, tgTheme, dispatch]);

    return <>{children}</>;
}
