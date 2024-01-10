ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /app
EXPOSE 3000

FROM base as dev
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev

COPY .babelrc ./
COPY cypress.config.js ./

CMD npm run dev

FROM cypress/included:12.12.0 as test-suite
WORKDIR /app
EXPOSE 3000
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY cypress.config.js ./cypress.config.js
COPY .env ./.env
COPY ./app ./app
COPY ./components ./components
COPY ./cypress ./cypress
COPY ./public ./public
COPY ./utils ./utils

RUN npm run build

