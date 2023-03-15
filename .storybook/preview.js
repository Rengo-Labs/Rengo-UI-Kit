import {addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import theme from './theme';
import './reset.css';

addParameters({
  options: {
    theme,
  },
});

addDecorator(withInfo);
addDecorator(centered);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
}
