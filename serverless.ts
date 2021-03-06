/* eslint-disable no-template-curly-in-string */
import type { AWS } from '@serverless/typescript';

import { api, cron } from './src/functions';

const serverlessConfiguration: AWS = {
  service: 'assets-capital',
  frameworkVersion: '2',
  useDotenv: true,
  package: {
    individually: true
  },
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
      packager: 'yarn',
    },
    stages: ['development', 'production'],
    prune: {
      automatic: true,
      number: 3,
    },
    alerts: {
      dashboards: true,
      definitions: {
        '5XXErrors': {
          name: '5XXErrors',
          namespace: 'AWS/ApiGateway',
          metric: '5XXError',
          omitDefaultDimension: true,
          dimensions: [
            {
              Name: 'ApiName',
              Value: '${self:service}-${self:provider.stage}',
            },
            {
              Name: 'Stage',
              Value: '${self:provider.stage}',
            },
          ],
          threshold: 5,
          statistic: 'Sum',
          period: 60,
          evaluationPeriods: 1,
          datapointsToAlarm: 1,
          comparisonOperator: 'GreaterThanOrEqualToThreshold',
        },
      },
      alarms: ['functionThrottles', 'functionErrors', '5XXErrors'],
    },
  },
  plugins: [
    'serverless-webpack',
    'serverless-offline',
    'serverless-stage-manager',
    'serverless-prune-plugin',
    'serverless-plugin-aws-alerts',
    'serverless-plugin-canary-deployments', // Remove this if you want to disable Canary Deployments
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: '${opt:stage, "development"}',
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: ['codedeploy:*'],
        Resource: '*',
      },
    ],
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
      metrics: false, // activate to see CacheHits and Misses
    },
    logs: {
      // activate to see API Gateway logs
      restApi: {
        accessLogging: false,
        executionLogging: false,
        level: 'INFO',
        fullExecutionData: false,
      },
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: { api, cron },
};

module.exports = serverlessConfiguration;
