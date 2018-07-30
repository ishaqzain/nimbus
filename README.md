## Getting Started

Get started by cloning the repo and installing dependencies:

```sh
$ git clone https://github.com/ishaqzain/nimbus.git
$ cd nimbus
$ npm install
```

Make sure that you also have the latest Node.js (at least 8.2.1) installed.

After installing dependencies, you can start up and serve the Vue App at http://localhost:8080, by running the below command. This will also start up and serve the living documentation at http://localhost:6060. These same instructions should work on both macOS and Windows.

```sh
$ npm start
```

## Using Vue Design System in an existing project

The recommended way is to keep Vue Design System separate from your existing applications and use the design system library as a private NPM dependency. What this basically means, is that your system’s base tokens, elements and patterns live in the system project and are only imported into your existing applications.

The benefit of this is that all your applications will have one centralized source of truth which is easier to scale and maintain. See instructions below on how to use Vue Design System through NPM.

## Using Design System as an NPM Module

There are a few things that you need to do to accomplish this. While the package.json has been prepared for this kind of usage, you will have to rename the project before running the build script. Find the below line from `package.json` to name your design system:

```sh
"name": "vue-design-system"
```

After you’ve renamed the project, you should be able to build your Design System for production in a way that allows the system to be published and used as an NPM module by running the following command:

```sh
npm run build:system
```

This command will first re-create your tokens in json and scss formats and then build the design system library. Once done, you should see a list of assets created and their file sizes. With the default configuration this creates `system.js`, `system.css` and `system.utils.scss` under `dist/system`.

Once finished, you should be able to test locally that everything works by installing the system to another Vue project (you’ll need to change the path to match your own file system):

```sh
npm install --save file:/Users/viljamis/code/vue-design-system
```

Once the design system module is installed successfully, you can import the system like this for example in your `main.js` file (_remember to replace “vue-design-system” with whatever name you used in your package.json_):

```sh
import system from 'vue-design-system'
import 'vue-design-system/dist/system.css'

Vue.use(system)
```

All your components, patterns, and templates should now be automatically imported and available for usage the same way as they work inside the Design System.

For more advanced needs, you can configure the way Webpack builds the library by editing build-system.js, webpack.system.conf.js and system config in config/index.js.

## Build Design System’s playground for production

Build Vue.js app (playground) for production with minification:

```sh
npm run build:app
```

Build Vue.js app (playground) for production and view the bundle analyzer report:

```sh
npm run build:app --report
```

## Build Design System’s docs for production

Build docs for production:

```sh
npm run build:docs
```

## Running tests

Lint the code with ESLint:

```sh
npm run lint
```

Run unit tests with Jest:

```sh
npm run test
```

## All available build commands

- `npm run build:system` builds the design system for NPM
- `npm run build:system --report` builds the design system for NPM and gives you bundle analyzer report.
- `npm run build:docs` builds the design system docs
- `npm run build:app` builds the Vue app
- `npm run build:app --report` builds the Vue app and gives you bundle analyzer report.
