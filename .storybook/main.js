module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(ts|tsx)",
    "../src/**/*.stories.[jt]s?(x)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/preset-scss"
  ]
}
