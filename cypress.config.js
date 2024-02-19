const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseUrl1: "https://www.automationpratice.com.br/",
  baseUrl2: "https://devfinance-agilizei.netlify.app/#",

  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
