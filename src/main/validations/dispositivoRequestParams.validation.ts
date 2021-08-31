/* eslint-disable prettier/prettier */
import Joi from 'joi';
import { objectId, acceptedLanguage } from './customRequestParams.validation';

const getDispositivos = {
  headers: Joi.object().keys({
    'accept-language': Joi.required().custom(acceptedLanguage),
  }),
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    from: Joi.number().integer(),
  }),
  options: {
    cache: false,
    allowUnknown: true,
  },
};

const getDispositivo = {
  headers: Joi.object().keys({
    'accept-language': Joi.required().custom(acceptedLanguage),
  }),
  params: Joi.object().keys({
    dispositivoId: Joi.string().custom(objectId),
  }),
  options: {
    cache: false,
    allowUnknown: true,
  },
};

export {
  getDispositivos,
  getDispositivo,
};
