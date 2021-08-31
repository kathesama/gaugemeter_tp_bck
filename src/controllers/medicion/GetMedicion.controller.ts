/* eslint-disable no-unused-vars */
import { ControllerInterface } from '../../interfaces/controller.interface';
import { serverErrorHelper, successHelper } from '../../helpers/http.helper';
import { HttpRequest, HttpResponse } from '../../interfaces/http.interface';
import { logger } from '../../main/config';

import {
  GetOneMedicionInterface,
  GetAllMedicionesInterface,
  GetAllMedicionesByDeviceInterface,
} from '../../interfaces/useCaseDTO/Medicion.interfaces';

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

export class GetAllMedicionesByDevice implements ControllerInterface {
  constructor(private readonly getMedicion: GetAllMedicionesByDeviceInterface) {
    this.getMedicion = getMedicion;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // object destructuration
      const { dispositivoId, type = 'all' } = httpRequest.params;
      const { limit = 10, from = 0 } = httpRequest.query;
      let medicion: any;
      switch (type) {
        case 'all':
          medicion = await this.getMedicion.findAllByDevice(dispositivoId, { limit, from });
          break;
        case 'last':
          medicion = await this.getMedicion.findAllByDevice(dispositivoId, { limit, from });
          break;
      }

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
