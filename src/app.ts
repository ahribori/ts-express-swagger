import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { Server } from 'typescript-rest';

const swaggerUi = require('swagger-ui-express');
const swaggerJsonPath = path.resolve('dist', 'swagger.json');
const app: express.Application = express();
const port: number = 8080;

const controllers = express.Router();

Server.buildServices(app);
Server.loadControllers(controllers, path.resolve('src/controller', '*'));

app.use(express.json());
app.use(controllers);

if (fs.existsSync(swaggerJsonPath)) {
  const swaggerDocument = require(swaggerJsonPath);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.listen(port);
