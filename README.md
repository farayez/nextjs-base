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

To do this, first copy `.env.local.example` into a new file in the same folder called `.env.local`, and replace the values with your own Auth0 application credentials (see more info about [loading environmental variables in Next.js](https://nextjs.org/docs/basic-features/environment-variables)):

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

## Build and Run the Application During Development

### Build image and start a container

- Build image
- Install dependencies
- Compile and serve Next.js app
- Start the API server on port 3000
- Allow hot-reload

```bash
docker compose up --build server
```

### Enter running container

```bash
docker compose exec server sh
```

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

### Run the unit tests

```bash
npm run test
```

### Run the integration tests

```bash
npm run test:integration
```

docker build -t nextjs-base-test --progress=plain --no-cache --target test .

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/responsible-disclosure-policy) details the procedure for disclosing security issues.

## Author

- [Auth0](https://auth0.com)
- [Araf Farayez](https://github.com/farayez)

## License

This project is licensed under the MIT license. See the [LICENSE](./LICENSE) file for more info.


# Cypress
