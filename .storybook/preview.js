import { addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import theme from './theme';
import themeDecorator from "./themeDecorator";
import './reset.css';

addParameters({
  options: {
    theme,
  },
});

addDecorator(themeDecorator)
addDecorator(withInfo);
addDecorator(centered);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
}

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'default',
        toolbar: {
            icon: 'circlehollow',
            items: ['default', 'dark'],
            dynamicTitle: true,
        }
    }
}
