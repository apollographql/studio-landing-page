module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],

  // App.tsx grants `height: 100%` to `html, body, #react-root` -- and
  // `#react-root` is the div the Apollo Server plugin emits in production.
  // Storybook renders into `#storybook-root` instead, so that element is left
  // at `height: auto` and the wrapper's own `height: 100%` resolves against an
  // auto-height parent: the whole page collapses to content height. Granting
  // the Storybook root the same height production gives `#react-root` restores
  // the chain, so stories render the way a real Apollo Server does.
  'previewHead': (head) => (
    `${head}
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
    <style>
      html,
      body,
      #storybook-root {
        height: 100%;
        margin: 0;
      }
    </style>
    `
  ),

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
}