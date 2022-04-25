export default {
  handler: `${__dirname.split(process.cwd())[1].substring(1)}/handler.main`,
  events: [
    {
      schedule: "rate(1 minute)",
    },
  ],
  // Remove this if you want to disable Canary Deployments
  deploymentSettings: {
    type: "Linear10PercentEvery1Minute",
    alias: "Live",
    alarms: ["Cron5XXErrorsAlarm", "CronFunctionErrorsAlarm"],
  },
};
