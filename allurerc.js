import { defineConfig } from "allure";

export default defineConfig({
  name: "Allure Report 3",
  output: "./allure-report",
  //   historyPath: "./history.jsonl", //required for flaky and status transitions detection
  //   categories: {
  //     rules: [
  //       {
  //         name: "Critical regressions by layer",
  //         id: "critical-regressions-by-layer",
  //         // this section determines what's included into the category
  //         matchers: {
  //           statuses: ["failed", "broken"],
  //           flaky: false,
  //           labels: { severity: "critical" },
  //           message: /expected|API/, // accepts regular expressions
  //           trace: /AssertionError|timeout|unexpected/, // accepts regular expressions
  //           transitions: ["regressed", "malfunctioned"],
  //           environments: ["staging", "production"],
  //         },

  //         // this section determines how the category is presented
  //         groupBy: ["layer", "owner", "status"],
  //         groupByMessage: true,
  //         groupEnvironments: true,
  //         expand: true,
  //         hide: false,
  //       },
  //     ],
  //   },
});
