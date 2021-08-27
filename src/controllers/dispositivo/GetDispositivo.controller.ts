/* eslint-disable no-unused-vars */
import { ControllerInterface } from '../../interfaces/controller.interface';
import { serverErrorHelper, successHelper } from '../../helpers/http.helper';
import { HttpRequest, HttpResponse } from '../../interfaces/http.interface';
import { logger } from '../../main/config';

import { GetOneDispositivoInterface, GetAllDispositivoInterface } from '../../interfaces/useCaseDTO/Dispositivo.interfaces';

export class GetAllDispositivos implements ControllerInterface {
  constructor(private readonly getDispositivo: GetAllDispositivoInterface) {
    this.getDispositivo = getDispositivo;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // object destructuration
      const { limit = 10, from = 0 } = httpRequest.query;

      const dispositivo: any = await this.getDispositivo.findAll({ limit, from });

      return successHelper(dispositivo);
    } catch (error) {
      logger.error(error);
      throw serverErrorHelper(error);
    }
  }
}

export class GetOneDispositivo implements ControllerInterface {
  constructor(private readonly getDispositivo: GetOneDispositivoInterface) {
    this.getDispositivo = getDispositivo;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { dispositivoId } = httpRequest.params;

      const dispositivo: any = await this.getDispositivo.findOne(dispositivoId);

      return successHelper(dispositivo);
    } catch (error) {
      logger.error(error);
      throw serverErrorHelper(error);
    }
  }
}
