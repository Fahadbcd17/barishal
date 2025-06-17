import { defineConfig } from "cypress";
import { configDotenv } from "dotenv";

configDotenv();


export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5173",
    env: {
      // key-value pairs for environment variables
    },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
