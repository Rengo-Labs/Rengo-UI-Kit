import {useEffect, useState} from 'react';
export const useTheme = (themeName: string) => {
    const [selectedTheme, setSelectedTheme] = useState(themeName);
    const toggleTheme = (theme: string) => {
        theme === 'default' ? setSelectedTheme('default') : setSelectedTheme('dark');
    }

    useEffect(() => {
        toggleTheme(themeName)
    }, [themeName])

    return [selectedTheme, toggleTheme];
}
