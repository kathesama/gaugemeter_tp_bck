import mongoose from 'mongoose';

const { Schema } = mongoose;

const electrovalvulaSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, 'Nombre es obligatorio'],
    },
  },
  { timestamps: true }
);

electrovalvulaSchema.method('toJSON', function () {
  const { _id, ...temporaryObject } = this.toObject();

  temporaryObject['uuid'] = _id;
  delete temporaryObject['__v'];
  delete temporaryObject['createdAt'];
  delete temporaryObject['updatedAt'];
  return temporaryObject;
});

export default electrovalvulaSchema;
