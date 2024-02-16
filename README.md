# Auth0 Next.js SDK Sample Application

This sample demonstrates the integration of [Auth0 Next.js SDK](https://github.com/auth0/nextjs-auth0) into a Next.js application created using [create-next-app](https://nextjs.org/docs/api-reference/create-next-app). The sample is a companion to the [Auth0 Next.js SDK Quickstart](https://auth0.com/docs/quickstart/webapp/nextjs).

This sample demonstrates the following use cases:

- [Login](https://github.com/auth0-samples/auth0-nextjs-samples/blob/main/Sample-01/components/NavBar.jsx#L61-L67)
- [Logout](https://github.com/auth0-samples/auth0-nextjs-samples/blob/main/Sample-01/components/NavBar.jsx#L93-L95)
- [Showing the user profile](https://github.com/auth0-samples/auth0-nextjs-samples/blob/main/Sample-01/pages/profile.jsx)
- [Protecting client-side rendered pages](https://github.com/auth0-samples/auth0-nextjs-samples/blob/main/Sample-01/pages/profile.jsx#L43-L46)
- [Calling APIs](https://github.com/auth0-samples/auth0-nextjs-samples/blob/main/Sample-01/pages/external.jsx)


## Auth0 Configuration

### Create an API

For the **External API** page to work, you will need to [create an API](https://auth0.com/docs/authorization/apis) using the [management dashboard](https://manage.auth0.com/#/apis). This will give you an API Identifier that you can use in the `AUTH0_AUDIENCE` environment variable below. Then you will need to [add a permission](https://auth0.com/docs/get-started/dashboard/add-api-permissions) named `read:shows` to your API. To get your app to ask for that permission, include it in the value of the `AUTH0_SCOPE` environment variable.

If you do not wish to use an API or observe the API call working, you should not specify the `AUTH0_AUDIENCE` and `AUTH0_SCOPE` values in the next steps.

### Configure credentials

The project needs to be configured with your Auth0 Domain, Client ID and Client Secret for the authentication flow to work.

To do this, first copy `.env.example` into a new file in the same folder called `.env`, and replace the values with your own Auth0 application credentials (see more info about [loading environmental variables in Next.js](https://nextjs.org/docs/basic-features/environment-variables)):

```sh
# A long secret value used to encrypt the session cookie
AUTH0_SECRET='LONG_RANDOM_VALUE'
# The base url of your application
AUTH0_BASE_URL='http://localhost:3000'
# The url of your Auth0 tenant domain
AUTH0_ISSUER_BASE_URL='https://YOUR_AUTH0_DOMAIN.auth0.com'
# Your Auth0 application's Client ID
AUTH0_CLIENT_ID='YOUR_AUTH0_CLIENT_ID'
# Your Auth0 application's Client Secret
AUTH0_CLIENT_SECRET='YOUR_AUTH0_CLIENT_SECRET'
# Your Auth0 API's Identifier 
# OMIT if you do not want to use the API part of the sample
AUTH0_AUDIENCE='YOUR_AUTH0_API_IDENTIFIER'
# The permissions your app is asking for
# OMIT if you do not want to use the API part of the sample
AUTH0_SCOPE='openid profile email read:shows'
```

Get `AUTH0_AUDIENCE` from [AUTH0 Apis page](https://manage.auth0.com/?_gl=1*fk70dm*_gcl_au*Nzc5NzI3MzQzLjE3MDQ1NTk0OTM.*rollup_ga*NjgyNjM1MjQyLjE3MDQ1NTg2MDg.*rollup_ga_F1G3E656YZ*MTcwNDY5NzAxOS43LjEuMTcwNDY5ODE2MS42MC4wLjA.*_ga*NjgyNjM1MjQyLjE3MDQ1NTg2MDg.*_ga_QKMSDV5369*MTcwNDY5NzAyNi44LjEuMTcwNDY5ODMzNi42MC4wLjA.&_ga=2.39848290.1184183585.1704558609-682635242.1704558608#/apis)

**Note**: Make sure you replace `AUTH0_SECRET` with your own secret (you can generate a suitable string using `openssl rand -hex 32` on the command line).

## Development

### Build images and start the ecosystem

- Build images, install dependencies
- Compile and serve Next.js app on port 3000 (`web`)
- Start the API server on port 3001 (`api`)
- Allow hot-reload on both web and api

```bash
docker compose up --build web api
```

### Enter a running container

**Note**: If the container is not running, start it following [Build images and start the ecosystem](#build-images-and-start-the-ecosystem).

- For `web` container
    ```bash
    docker compose exec web sh
    ```
- For `api` container
    ```bash
    docker compose exec api sh
    ```

### After any `package.json` update

After a `package.json` update the `package-lock.json` will not update automatically. In order to update the lock file you need to enter the container and run `npm install`.

- [Enter a running container](#enter-a-running-container)
- Install dependencies
    ```bash
    npm install
    ```

### After any `.env` update

After a `.env` file update the config will not be refreshed in the running app automatically. In order to use the updated config you need restart the container.

- Stop container
- Start container
    ```bash
    docker compose up --build web api
    ```

## Testing

### Run Jest tests for web and api
- [Enter a running container](#enter-a-running-container)
- Run tests
    ```bash
    npm run test
    ```

### Run Cypress tests for web
- Make sure the `.env.testing` file is created and populated. 
- Start test-web-cypress container. It will start server and run tests
```bash
docker compose up --build test-web-cypress
```

## Running Migrations
[Sequelize Docs](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration)
npx sequelize model:generate --name Test --attributes firstName:string,lastName:string,email:string
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

## Build and Run the Application To Simulate Deployment

### Build image and start a container

- Build image for deployment
- Install dependencies
- Compile and minify for production
- Start the API server on port 3000

Run `exec.sh`, or `exec.ps1` on Windows.

```bash
sh exec.sh
```

## Build the Application Image For Deployment

### Build image
- Build image for deployment
- Install dependencies
- Compile and minify for production

```bash
docker build --file Dockerfile.prod -t nextjs-base-01 .
```

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/responsible-disclosure-policy) details the procedure for disclosing security issues.

## Author

- [Auth0](https://auth0.com)
- [Araf Farayez](https://github.com/farayez)

## License

This project is licensed under the MIT license. See the [LICENSE](./LICENSE) file for more info.

