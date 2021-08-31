import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import { ControllerInterface } from '../../interfaces/controller.interface';
import { badRequestHelper, serverErrorHelper, successHelper } from '../../helpers/http.helper';
import { HttpRequest, HttpResponse } from '../../interfaces/http.interface';

import { addLogRiegoInterface } from '../../interfaces/useCaseDTO/LogRiego.interfaces';
import { logger } from '../../main/config';
import { LogRiegoModel } from '../../domain/models/LogRiego.model';

export class RegisterLogRiegoFactorie implements ControllerInterface {
  // tokenService = TokenService;

  // eslint-disable-next-line no-unused-vars
  constructor(private readonly addLogRiego: addLogRiegoInterface) {
    this.addLogRiego = addLogRiego;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { apertura, electrovalvulaId, fecha } = httpRequest.body;

      const logRiegoAdded: any = await this.addLogRiego.add(new LogRiegoModel(apertura, fecha, electrovalvulaId));

      return successHelper(logRiegoAdded);
    } catch (error) {
      logger.error(error.message);
      return serverErrorHelper(error);
    }
  }
}
