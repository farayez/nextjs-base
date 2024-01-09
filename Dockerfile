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

CMD npm run dev:all

FROM cypress/included:12.12.0 as test-suite
# ENV NODE_ENV test
WORKDIR /app
EXPOSE 3000
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev


COPY . .
RUN npm run build

