import {useEffect, useState, useMemo} from 'react';

export const useTheme = (themeName: string) => {
    const [selectedTheme, setSelectedTheme] = useState<string>('');

    const toggleTheme = (theme: string) => {
        // theme === 'default' ? setSelectedTheme('default') : setSelectedTheme('dark');
        setSelectedTheme(theme)
    }

    useEffect(() => {
        toggleTheme(themeName)
    }, [themeName])

    console.log('from useEffect hook selectedTheme', selectedTheme)

    return [selectedTheme, toggleTheme];
}
