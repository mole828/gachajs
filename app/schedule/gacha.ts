
import { Subscription } from "egg";

export default class Schedule extends Subscription {
    static get schedule(){
        return {
            interval: '1m',
            type: 'worker',
        };
    }

    
    async subscribe() {
        const { gacha } = this.ctx.service;
        for await(const doc of this.ctx.model.Doctor.find({})){
            const {token,} = doc;
            gacha.updateOne(token);
        };
    }
}

