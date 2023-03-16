module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-postcss", "@storybook/addon-actions"],
  docs: {
    autodocs: true
  }
};
