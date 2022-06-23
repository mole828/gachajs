import { Service } from "egg";

import { sleep } from "../tools/util";
import { basic, InquiryType, iter, } from "../tools/ark";
import { isNull } from "util";

export default class GachaService extends Service{
    async updateOne(token:string, dt:number=2000, ){
        const {status, data} = await basic(token);
        if(status!==0)return;
        const {model} = this.ctx;
        const {uid} = data;
        model.Doctor.updateOne({uid},{t:0,...data})
        let count = 0;
        for await(const d of iter(InquiryType.gacha, token)){await sleep(dt);{
            const { ts } = d;
            const dinb = await model.Gacha.findOne({uid, ts});
            if(isNull(dinb)){
                let ins = { uid, ...d};
                console.log(`insert: ${ins}`);
                model.Gacha.insertMany([ins]);
                count+=1;
            }else{break;}
        }};
        if(count)this.logger.info(`docter:${data.nickName}, finish update`);
    }

}