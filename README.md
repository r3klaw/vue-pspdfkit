# PSPDFKit for Web Example – Vue

This example shows how to integrate [PSPDFKit for Web](https://pspdfkit.com/web/) into a Vue.js app.

## Prerequisites

- [Node.js](http://nodejs.org/) (with npm or Yarn)
- A PSPDFKit for Web license. If you don't already have one
  you can [request a free trial here](https://pspdfkit.com/try/).

## Getting Started

Install the `pspdfkit` npm package using the NPM_KEY provided with your license.

```bash
npm install --save https://customers.pspdfkit.com/npm/YOUR_NPM_KEY_GOES_HERE/latest.tar.gz
```

Or, if using `yarn`:

```bash
yarn add https://customers.pspdfkit.com/npm/YOUR_NPM_KEY_GOES_HERE/latest.tar.gz
```

This example does not use any other dependency unless you want to use the helper script `scripts/copy-pspdfkit-files.js`, which uses the `ncp` package to copy the PSPDFKit for Web files onto the example directory.

To install it (the dependency is already included in `package.json`):

```bash
npm install
```

Or, if using `yarn`:

```bash
yarn install
```

Now that everything is installed we need to configure the app to use our [PSPDFKit for Web license key](https://pspdfkit.com/guides/web/current/standalone/integration).

Edit `./src/index.html` and replace the string `YOUR_LICENSE_KEY_GOES_HERE` with the license key that you received via e-mail.

## Running the Example

We are ready to launch the app! 🎉

```bash
npm run start
```

Or:

```bash
yarn start
```

You can now open http://localhost:9000 in your browser and enjoy!

## Vue Component

The Vue component which implements the PSPDFKit for Web integration is included at `src/index.html` with the rest of the example.

In order to make the files above available we have to copy them from the `node_modules/pspdfkit/dist` folder using a script which you can find at `scripts/copy-pspdfkit-files.js`.

## License

This software is licensed under a [modified BSD license](LICENSE).
