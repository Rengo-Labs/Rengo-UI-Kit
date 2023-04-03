import React from "react";
import { UiProvider, theme } from "../src";
const getTheme = (context) => {
    const themeName = context.globals.theme;
    return theme[themeName];
}

const ThemeDecorator = (storyFn, context) => {
    const theme = getTheme(context);
    return <UiProvider theme={theme}>{storyFn()}</UiProvider>;
}
export default ThemeDecorator;
