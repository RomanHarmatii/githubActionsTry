import { defineConfig } from "cypress";
import "dotenv/config";
import { config } from "dotenv";
import { baseConfig } from "./baseConfig";

config({ path: `.env.staging` });

const configObj = {
  ...baseConfig,
  e2e: {
    baseUrl: process.env.BASE_URL,
  },
};

export default defineConfig(configObj);
