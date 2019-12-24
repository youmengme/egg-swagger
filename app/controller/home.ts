import { Controller } from 'egg';
import { Get, Description, Render, Prefix } from 'egg-shell-change'

@Prefix('/')
export default class HomeController extends Controller {

  @Get('/')
  @Description('首页')
  @Render
  public async home() {
    return {
      code: 0,
      data: [],
      msg: 'success'
    }
  }

  @Get('/api-doc')
  @Description('首页')
  @Render
  public async index() {
    const { ctx } = this;
    await ctx.render('index', {})
  }
}
