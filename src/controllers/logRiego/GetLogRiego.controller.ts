/* eslint-disable no-unused-vars */
import { ControllerInterface } from '../../interfaces/controller.interface';
import { serverErrorHelper, successHelper } from '../../helpers/http.helper';
import { HttpRequest, HttpResponse } from '../../interfaces/http.interface';
import { logger } from '../../main/config';

import {
  GetLastLogByElectovalvulaInterface,
  GetOneLogRiegoInterface,
  GetAllLogRiegoInterface,
  GetAllLogRiegoByDeviceInterface,
} from '../../interfaces/useCaseDTO/LogRiego.interfaces';

export class GetAllLogRiegos implements ControllerInterface {
  constructor(private readonly getLogRiego: GetAllLogRiegoInterface) {
    this.getLogRiego = getLogRiego;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // object destructuration
      const { limit = 10, from = 0 } = httpRequest.query;

      const logRiego: any = await this.getLogRiego.findAll({ limit, from });

      return successHelper(logRiego);
    } catch (error) {
      logger.error(error);
      throw serverErrorHelper(error);
    }
  }
}

export class GetAllLogRiegosByDevice implements ControllerInterface {
  constructor(private readonly getLogRiego: GetAllLogRiegoByDeviceInterface) {
    this.getLogRiego = getLogRiego;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // object destructuration
      const { limit = 10, from = 0 } = httpRequest.query;
      const { dispositivoId } = httpRequest.params;

      const logRiego: any = await this.getLogRiego.findAllBYDevice(dispositivoId, { limit, from });

      return successHelper(logRiego);
    } catch (error) {
      logger.error(error);
      throw serverErrorHelper(error);
    }
  }
}

export class GetLastLogRiegosByElectrovalvula implements ControllerInterface {
  constructor(private readonly getLogRiego: GetLastLogByElectovalvulaInterface) {
    this.getLogRiego = getLogRiego;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // object destructuration
      const { dispositivoId } = httpRequest.params;

      const logRiego: any = await this.getLogRiego.findLastByElectrovalvulaId(dispositivoId);

      return successHelper(logRiego);
    } catch (error) {
      logger.error(error);
      throw serverErrorHelper(error);
    }
  }
}

export class GetOneLogRiego implements ControllerInterface {
  constructor(private readonly getLogRiego: GetOneLogRiegoInterface) {
    this.getLogRiego = getLogRiego;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { logRiegoId } = httpRequest.params;

      const logRiego: any = await this.getLogRiego.findOne(logRiegoId);

      return successHelper(logRiego);
    } catch (error) {
      logger.error(error);
      throw serverErrorHelper(error);
    }
  }
}
