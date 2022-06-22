import { Application } from "egg";

export default function(app:Application){
    const { logger,mongoose} = app;
    logger.warn('model doctor build');
    const { Schema } = mongoose;
    const DoctorSchema = new Schema({
        nickName: {type: String},
    })
    return mongoose.model('doctor',DoctorSchema);
}