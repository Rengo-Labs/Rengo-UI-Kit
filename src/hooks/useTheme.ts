import {useEffect, useState} from 'react';

interface IUseTheme {
    themeName?: string | undefined;
}

export const useTheme = (themeName: string) => {
    const [selectedTheme, setSelectedTheme] = useState(themeName);
    const toggleTheme = (theme: string) => {
        theme === 'default' ? setSelectedTheme('dark') : setSelectedTheme('default');
    }

    useEffect(() => {
        toggleTheme(themeName)
    }, [themeName])

    return [selectedTheme, toggleTheme];
}
