module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
};