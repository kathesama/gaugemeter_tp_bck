/* eslint-disable no-unused-vars */
import { ControllerInterface } from '../../interfaces/controller.interface';
import { serverErrorHelper, successHelper } from '../../helpers/http.helper';
import { HttpRequest, HttpResponse } from '../../interfaces/http.interface';
import { logger } from '../../main/config';

import { GetOneLogRiegoInterface, GetAllLogRiegoInterface } from '../../interfaces/useCaseDTO/LogRiego.interfaces';

export class GetAllLogRiegos implements ControllerInterface {
  constructor(private readonly getLogRiego: GetAllLogRiegoInterface) {
    this.getLogRiego = getLogRiego;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // object destructuration
      const { limit = 5, from = 0 } = httpRequest.query;

      const logRiego: any = await this.getLogRiego.findAll({ limit, from });

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
