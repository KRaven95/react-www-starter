# presale-v2-go2nft

This readme describes how to prepare and run this app.

## Getting started

#### 1. Installing dependecies

```
yarn
```

#### 2. Copy .env.example and update environment variables

For production mode copy to .env file.

```
cp .env.example .env
```

For development mode copy to .env.dev file.

```
cp .env.example .env.dev
```

#### 3. Run the app

Production mode:

```
yarn start:prod
```

Development mode:

```
yarn start:dev
```

## yarn scripts

### Build and run scripts

- `start:dev` – starts dev server with local enviroments
- `start:prod` – starts prod server with local enviroments
- `build:dev` – bundles application for development with local enviroments
- `build:prod` – bundles application for production with local enviroments
- `build:ci` – bundles using external enviroments
- `architecture` – builds dependency graph of whole app

### Other scripts

- `test` – run tests
- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`

## Environment variables

| Name                 | Description                            | Type    |
| -------------------- | -------------------------------------- | ------- |
| REACT_APP_STAGE      | Application mode. Example: dev or prod | string  |
| REACT_APP_DEBUG_MODE | Flag to enable debug mode              | boolean |
