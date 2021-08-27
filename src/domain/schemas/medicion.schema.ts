import mongoose from 'mongoose';

const { Schema } = mongoose;

const medicionSchema = new Schema(
  {
    fecha: {
      type: Date,
      required: [true, 'fecha es obligatoria'],
    },
    valor: {
      type: String,
      required: [true, 'valor es obligatorio'],
    },
    dispositivoID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Dispositivos',
      required: true,
    },
  },
  { timestamps: true }
);

medicionSchema.index({ _id: 1, dispositivoID: 1 }, { unique: true });

medicionSchema.method('toJSON', function () {
  const { _id, ...temporaryObject } = this.toObject();

  temporaryObject['uuid'] = _id;
  delete temporaryObject['__v'];
  delete temporaryObject['createdAt'];
  delete temporaryObject['updatedAt'];
  return temporaryObject;
});

export default medicionSchema;
