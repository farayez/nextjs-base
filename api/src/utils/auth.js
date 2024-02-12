import { expressjwt } from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import { AUTH0_ISSUER_BASE_URL as ISSUER_BASE_URL, AUTH0_AUDIENCE as AUDIENCE } from '../../config/index.js';

if (!ISSUER_BASE_URL) {
  throw new Error('Please make sure that the file .env is in place and populated');
}

if (!AUDIENCE) {
  console.log('AUTH0_AUDIENCE not set in .env. Shutting down API server.');
  process.exit(1);
}

export default expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${ISSUER_BASE_URL}/.well-known/jwks.json`
  }),
  audience: AUDIENCE,
  issuer: `${ISSUER_BASE_URL}/`,
  algorithms: ['RS256']
});
