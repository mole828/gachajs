import { Controller } from 'egg';

export default class ArkController extends Controller {
  public async doctors() {
    const { ctx } = this;
    const cur = await ctx.model.Doctor.find({},{_id:0});
    ctx.body = {
      data: [...cur]
    }
  }
}
