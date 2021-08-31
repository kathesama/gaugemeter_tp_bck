import mongoose from 'mongoose';

const { Schema } = mongoose;

const dispositivoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, 'Nombre es obligatorio'],
    },
    ubicacion: {
      type: String,
      required: [true, 'ubicacion es obligatoria'],
    },
    electrovalvulaID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Electrovalvulas',
      required: true,
    },
  },
  { timestamps: true }
);

dispositivoSchema.index({ _id: 1, electrovalvulaID: 1 }, { unique: true });

dispositivoSchema.method('toJSON', function () {
  const { _id, ...temporaryObject } = this.toObject();

  temporaryObject['dispositivoId'] = _id;
  delete temporaryObject['__v'];
  delete temporaryObject['createdAt'];
  delete temporaryObject['updatedAt'];
  return temporaryObject;
});

export default dispositivoSchema;
