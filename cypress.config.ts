import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    allowCypressEnv: false,
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true
  },
});