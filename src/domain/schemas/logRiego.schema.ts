import mongoose from 'mongoose';

const { Schema } = mongoose;

const logRiegoSchema = new Schema(
  {
    apertura: {
      type: Number,
      required: [true, 'apertura es obligatoria'],
    },
    fecha: {
      type: Date,
      required: [true, 'fecha es obligatoria'],
    },
    electrovalvulaID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Electrovalvulas',
      required: true,
    },
  },
  { timestamps: true }
);

logRiegoSchema.index({ _id: 1, electrovalvulaID: 1 }, { unique: true });

logRiegoSchema.method('toJSON', function () {
  const { _id, ...temporaryObject } = this.toObject();

  temporaryObject['uuid'] = _id;
  delete temporaryObject['__v'];
  delete temporaryObject['createdAt'];
  delete temporaryObject['updatedAt'];
  return temporaryObject;
});

export default logRiegoSchema;
