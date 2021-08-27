import mongoose from 'mongoose';
import logRiegoSchema from '../schemas/logRiego.schema';

export default mongoose.model('logRiegos', logRiegoSchema);
