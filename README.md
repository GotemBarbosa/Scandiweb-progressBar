# Getting Started with Create ScandiPWA App

This package contains new ScandiPWA theme sources. Your parent theme is `@scandipwa/scandipwa`.

## Installation

Before you start, make sure to install package dependencies.

To do this, use `yarn` or `npm i` command.

### Recommended packages

For the best expirience, install `scandipwa-cli` package globally. To do this, run:

```bash
npm i -g scandipwa-cli
```

## Available Scripts

### `npm run start` or `yarn start`

Starts the development server.

**Features**:
- There is a progression bar in Checkout page


### `npm run build` or `yarn build`

Bundles the app into static files for production.

> **Note**: To bundle your application as valid Magento 2 theme use `--magento` option.

## Extensions

To install an extension, run following command:

```bash
scandipwa extension <EXTENSION NAME>
```

> **Note**: to create new extension add `--create` option after the command. This will create a new extension package under `packages` folder.


