import { Application } from 'egg'
import { EggShell } from 'egg-shell-change'

export default (app: Application) => {
  EggShell(app, {
    quickStart: true,
    swaggerOpt: {
      open: true,
      title: '接口文档',
      description: 'description',
      version: '1.0.0',
      host: '127.0.0.1',
      port: [80, 443],
      schemes: [ 'http', 'https' ],
      paths: {
        outPath: './app/public/swagger-ui/json/main.json',
        definitionPath: './app/definitions',
        swaggerPath: './app/swagger',
      }
    },
  })
}
