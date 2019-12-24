import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
const specSequelize = require('sequelize')
const sequelizeCLSNamespace = require('cls-hooked').createNamespace('your-namespace')
specSequelize.useCLS(sequelizeCLSNamespace)
exports.sequelize = {
  Sequelize: specSequelize
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577186961317_1410';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  }

  config.view = {
    mapping: {
      '.html': 'ejs'
    },
  }

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'test',
    username: 'test',
    password: 'test'
  }

  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: '',
      db: 1,
    },
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
