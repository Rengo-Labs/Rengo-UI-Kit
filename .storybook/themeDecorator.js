import React from "react";
import { UiProvider } from "../src";
const getTheme = (context) => {
    return context.globals.theme;
}
const ThemeDecorator = (storyFn, context) => {
    const theme = getTheme(context);
    return <UiProvider themeName={theme}>{storyFn()}</UiProvider>;
}
export default ThemeDecorator;
