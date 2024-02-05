if (process.env.NODE_ENV == 'test') {
  require('dotenv').config({ path: './.env.testing' });
} else {
  require('dotenv').config({ path: './.env' });
}

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
const port = process.env.API_PORT || 3001;
const baseUrl = process.env.AUTH0_BASE_URL;

if (!baseUrl) {
  throw new Error('Please make sure that the file .env is in place and populated');
}

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: baseUrl }));

require('./utils/apiRoutes').addRoutes(app);

if (process.env.NODE_ENV == 'test') {
  module.exports = app;
} else {
  const server = app.listen(port, () => console.log(`API Server listening on port ${port}`));
  process.on('SIGINT', () => server.close());
}
