import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import { ControllerInterface } from '../../interfaces/controller.interface';
import { badRequestHelper, serverErrorHelper, successHelper } from '../../helpers/http.helper';
import { HttpRequest, HttpResponse } from '../../interfaces/http.interface';

import { addMedicionInterface } from '../../interfaces/useCaseDTO/Medicion.interfaces';
import { logger } from '../../main/config';
import { MedicionModel } from '../../domain/models/Medicion.model';

export class RegisterMedicionFactorie implements ControllerInterface {
  // tokenService = TokenService;

  // eslint-disable-next-line no-unused-vars
  constructor(private readonly addMedicion: addMedicionInterface) {
    this.addMedicion = addMedicion;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { valor, dispositivoId, fecha } = httpRequest.body;

      const logMedicionAdded: any = await this.addMedicion.add(new MedicionModel(fecha, valor, dispositivoId));

      return successHelper(logMedicionAdded);
    } catch (error) {
      logger.error(error.message);
      return serverErrorHelper(error);
    }
  }
}
