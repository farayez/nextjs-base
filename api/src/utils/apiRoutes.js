/**
 * Controllers (route handlers).
 */
const healthCheckController = require('../controllers/utils/health-check');
const validateTokenController = require('../controllers/utils/validate-token');

const checkJwt = require('./auth');

exports.addRoutes = function (app) {
  app.get('/api/health-check', healthCheckController.getAppHealth);
  app.get('/api/shows', checkJwt, validateTokenController.validateToken);
};
