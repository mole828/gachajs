import { Application } from "egg";

export default function(app:Application){
    const { logger,mongoose} = app;
    logger.warn('model gacha build');
    const { Schema } = mongoose;
    const schema = new Schema({
        ts:     {type: Number},
        pool:   {type: String},
        chars:  {type: Array},
        uid:    {type: String},
        nickName:{type:String},
    })
    return mongoose.model('gacha',schema);
}