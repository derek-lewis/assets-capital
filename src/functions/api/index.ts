export default {
  handler: `${__dirname.split(process.cwd())[1].substring(1)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "api",
      },
    },
  ],
  // Remove this if you want to disable Canary Deployments
  deploymentSettings: {
    type: "Linear10PercentEvery1Minute",
    alias: "Live",
    alarms: ["Api5XXErrorsAlarm", "ApiFunctionErrorsAlarm"],
  },
};
