const { defineConfig } = require('i18next-cli');

/** @type {import('i18next-cli').I18nextToolkitConfig} */
module.exports = defineConfig({
  locales: [
    "en",
    "de"
  ],
  extract: {
    input: "src/**/*.{js,jsx,ts,tsx}",
    output: "public/locales/{{language}}/{{namespace}}.json"
  }
});