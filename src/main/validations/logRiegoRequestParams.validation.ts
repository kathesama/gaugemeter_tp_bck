/* eslint-disable prettier/prettier */
import Joi from 'joi';
import { acceptedLanguage, objectId } from './customRequestParams.validation';

const createLogRiego = {
  headers: Joi.object().keys({
    'accept-language': Joi.required().custom(acceptedLanguage),
  }),
  body: Joi.object().keys({
    apertura: Joi.number().required(),
    fecha: Joi.date().required(),
    electrovalvulaId: Joi.string().custom(objectId).required(),
  }),
  options: {
    cache: false,
    allowUnknown: true,
  },
};

export {
  createLogRiego,
};

/*
apertura: number;
  fecha: Date;
  electrovalvulaID: string;

*/
