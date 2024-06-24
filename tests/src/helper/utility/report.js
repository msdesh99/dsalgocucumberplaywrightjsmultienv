const report = require("multiple-cucumber-html-reporter")
report.generate({
  jsonDir: "test-results",
  reportPath: "./",  //root path of the project for index.html
  reportName:"Playwright cucumber-js multienvironment",
  pageTitle:"DSALGO-DD driven and linkedlist module",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "125",
    },
    device: "MdeshDesktop",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "DsAlgo Automation project" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "Smoke-1(Jira cycle" },
      { label: "Browser", value: `${process.env.BROWSER}`},
      { label: "Environment", calue: `${process.env.NODE_ENV}`},
      { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});