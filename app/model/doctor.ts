import { Application } from 'egg';

export default function(app:Application) {
  const { logger, mongoose } = app;
  logger.warn('model doctor build');
  const { Schema } = mongoose;
  const schema = new Schema({
    uid: { type: String },
    nickName: { type: String },
    token: { type: String },
  });
  return mongoose.model('doctor', schema);
}
