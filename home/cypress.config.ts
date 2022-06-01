import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: false,
  projectId: "zkw3on",

  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
