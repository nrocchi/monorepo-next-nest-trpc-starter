# Monorepo Nest.js & Next.js tRPC Applications

Monorepo Nest.js & Next.js applications using tRPC & React Query.

*tRPC allows you to easily build & consume fully typesafe APIs without schemas or code generation.*

Check the docs: [trpc.io](https://trpc.io/docs)

## Features

- Nest.js API example using tRPC Router.
- Next.js application example using the Nest.js API with tRPC or using an internal tRPC router built with the Next.js API handler.
- tRPCProxyClient for external direct calls with the Nest.js API (Client and Server side).
- tRPCNext for internal calls with the Next.js API handler (Client side).
- tRPCNextSSR for internal calls with the Next.js API handler (Server side).
- tRPCReact with a tRPC Provider for internal calls with the Next.js API handler (Client side).
- React Query for fetching on client side.
- Monorepo with pnpm.

## Installation

### Cloning the repository

```shell
git clone https://github.com/nrocchi/monorepo-next-nest-trpc-starter.git
```

### Install packages for all applications

```shell
pnpm i -r
```

### Install packages for only one application (use pnpm filter)

```shell
pnpm i PACKAGENAME --filter=MYAPPNAME
```

(eg. *pnpm i @tanstack/react-query --filter=next-trpc-starter*)

### Setup .env file for the Nest.js application

```js
NEST_APP_PORT=4000
```

### Setup .env file for the Next.js application

```js
NEXT_PUBLIC_NEST_URL=http://localhost:4000
```

### Start all the apps in parallel

```shell
pnpm dev --turbo
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of all the apps in parallel |
| `start:nest-trpc-starter`           | Starts a production instance of the Nest.js app (for deployment) |
| `start:next-trpc-starter`           | Starts a production instance of the Next.js app (for deployment) |
| `build:nest-trpc-starter`           | Build the production instance of the Nest.js app |
| `build:next-trpc-starter`           | Build the production instance of the Next.js app |
| `test`           | Launch the tests |

## Contributors

The original author is [Nicolas Rocchi](https://github.com/nrocchi).
