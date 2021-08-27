import mongoose from 'mongoose';
import medicionSchema from '../schemas/medicion.schema';

export default mongoose.model('Mediciones', medicionSchema);
