import { Controller } from 'egg';
import { Get, Prefix } from 'egg-shell-change'

@Prefix('/')
export default class HomeController extends Controller {

  @Get('')
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
