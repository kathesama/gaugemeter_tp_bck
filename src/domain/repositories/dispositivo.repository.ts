import mongoose from 'mongoose';
import dispositivoSchema from '../schemas/dispositivo.schema';

export default mongoose.model('Dispositivos', dispositivoSchema);
