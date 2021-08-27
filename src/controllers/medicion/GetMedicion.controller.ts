/* eslint-disable no-unused-vars */
import { ControllerInterface } from '../../interfaces/controller.interface';
import { serverErrorHelper, successHelper } from '../../helpers/http.helper';
import { HttpRequest, HttpResponse } from '../../interfaces/http.interface';
import { logger } from '../../main/config';

import { GetOneMedicionInterface, GetAllMedicionesInterface } from '../../interfaces/useCaseDTO/Medicion.interfaces';

export class GetAllMediciones implements ControllerInterface {
  constructor(private readonly getMedicion: GetAllMedicionesInterface) {
    this.getMedicion = getMedicion;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // object destructuration
      const { limit = 5, from = 0 } = httpRequest.query;

      const medicion: any = await this.getMedicion.findAll({ limit, from });

      return successHelper(medicion);
    } catch (error) {
      logger.error(error);
      throw serverErrorHelper(error);
    }
  }
}

export class GetOneMedicion implements ControllerInterface {
  constructor(private readonly getMedicion: GetOneMedicionInterface) {
    this.getMedicion = getMedicion;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { medicionId } = httpRequest.params;

      const medicion: any = await this.getMedicion.findOne(medicionId);

      return successHelper(medicion);
    } catch (error) {
      logger.error(error);
      throw serverErrorHelper(error);
    }
  }
}
