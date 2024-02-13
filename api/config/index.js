import dotenv from 'dotenv';

if (process.env.NODE_ENV == 'test') {
  dotenv.config({ path: './.env.testing' });
} else {
  dotenv.config({ path: './.env' });
}
// dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// export const NODE_ENV = process.env.NODE_ENV!;
// export const PORT = 8000;
export const APP_NAME = process.env.APP_NAME;
export const APP_ENV = process.env.APP_ENV;
export const API_PORT = process.env.API_PORT;
export const AUTH0_SECRET = process.env.AUTH0_SECRET;
export const AUTH0_BASE_URL = process.env.AUTH0_BASE_URL;
export const AUTH0_ISSUER_BASE_URL = process.env.AUTH0_ISSUER_BASE_URL;
export const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
export const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;
export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
export const AUTH0_SCOPE = process.env.AUTH0_SCOPE;

export const DB_HOST = process.env.DB_HOST;
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_DATABASE = process.env.DB_DATABASE;
