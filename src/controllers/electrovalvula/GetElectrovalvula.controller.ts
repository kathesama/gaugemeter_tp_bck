/* eslint-disable no-unused-vars */
import { ControllerInterface } from '../../interfaces/controller.interface';
import { serverErrorHelper, successHelper } from '../../helpers/http.helper';
import { HttpRequest, HttpResponse } from '../../interfaces/http.interface';
import { logger } from '../../main/config';

import { GetOneElectrovalvulaInterface, GetAllElectrovalvulaInterface } from '../../interfaces/useCaseDTO/Electrovalvula.interfaces';
import { GetLastLogByElectovalvulaInterface } from '../../interfaces/useCaseDTO/LogRiego.interfaces';

export class GetAllElectrovalvulas implements ControllerInterface {
  constructor(private readonly getElectrovalvula: GetAllElectrovalvulaInterface) {
    this.getElectrovalvula = getElectrovalvula;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // object destructuration
      const { limit = 10, from = 0 } = httpRequest.query;

      const electrovalvula: any = await this.getElectrovalvula.findAll({ limit, from });

      return successHelper(electrovalvula);
    } catch (error) {
      logger.error(error);
      throw serverErrorHelper(error);
    }
  }
}

export class GetOneElectrovalvula implements ControllerInterface {
  constructor(private readonly getElectrovalvula: GetOneElectrovalvulaInterface) {
    this.getElectrovalvula = getElectrovalvula;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      const electrovalvula: any = await this.getElectrovalvula.findOne(id);

      return successHelper(electrovalvula);
    } catch (error) {
      logger.error(error);
      throw serverErrorHelper(error);
    }
  }
}

export class GetLastLogByElectrovalvula implements ControllerInterface {
  constructor(private readonly getLogElectrovalvula: GetLastLogByElectovalvulaInterface) {
    this.getLogElectrovalvula = getLogElectrovalvula;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      const electrovalvula: any = await this.getLogElectrovalvula.findLastByElectrovalvulaId(id);

      return successHelper(electrovalvula);
    } catch (error) {
      logger.error(error);
      throw serverErrorHelper(error);
    }
  }
}
