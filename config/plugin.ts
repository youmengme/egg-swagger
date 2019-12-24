import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};

export default plugin;
