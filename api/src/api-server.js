import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import addRoutes from './utils/apiRoutes.js';

if (process.env.NODE_ENV == 'test') {
  dotenv.config({ path: './.env.testing' });
} else {
  dotenv.config({ path: './.env' });
}

const app = express();
const port = process.env.API_PORT || 3001;
const baseUrl = process.env.AUTH0_BASE_URL;

if (!baseUrl) {
  throw new Error('Please make sure that the file .env is in place and populated');
}

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: baseUrl }));

addRoutes(app);

if (process.env.NODE_ENV == 'test') {
  module.exports = app;
} else {
  const server = app.listen(port, () => console.log(`API Server listening on port ${port}`));
  process.on('SIGINT', () => server.close());
}
