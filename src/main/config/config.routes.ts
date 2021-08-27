// import fg from 'fast-glob';
import * as express from 'express';
import {
  dispositivoRoutes,
  electrovalvulaRoutes,
  logRiegoRoutes,
  medicionRoutes,
  roleRoutes,
  sessionRoutes,
  testRoutes,
  userRoutes,
} from '../routes';
// import swaggerUi from 'swagger-ui-express';
// import { environmentConfig } from './environment.config';

export default (app: express.Express): void => {
  const routes: express.Router = express.Router();
  const basePath = '/api/v1';

  // routes.use(
  //   '/docs',
  //   swaggerUi.serve,
  //   swaggerUi.setup(undefined, {
  //     swaggerOptions: {
  //       url: '/swagger.json',
  //     },
  //   })
  // );

  routes.use('/tests', testRoutes);

  routes.use('/roles', roleRoutes);
  routes.use('/users', userRoutes);
  routes.use('/auths', sessionRoutes);

  routes.use('/mediciones', medicionRoutes);
  routes.use('/logs', logRiegoRoutes);
  routes.use('/electrovalvulas', electrovalvulaRoutes);
  routes.use('/dispositivos', dispositivoRoutes);

  app.use(basePath, routes);
  /*

    if (this.#environment['env'].ENV === 'development') {
      this.#app.use(this.docAPIPath, this.#environment['routes']['swagger']);
    }
  */
};
