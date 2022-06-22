import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const cur = await ctx.model.Doctor.find({},{_id:0});
    console.log([...cur])
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
