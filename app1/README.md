# Micro app 1

## Getting started

Create a .env file in the root of this project and add the following to the .env file

```
SKIP_PREFLIGHT_CHECK=true
BROWSER=none
PORT=3001
WDS_SOCKET_PORT=3001

```

Then install dependencies `yarn`

The start the app `yarn start`

The app will be available at http://localhost:3001

### Take note of the following:

- This app is a React 18 app created with create-react-app
- To become a micro-app we needed to modify the web-pack configuration
- The webpack config is modified in .rescriptsrc.js that can be found in the root directory
- For the webpack modifications to work, we needed to install a dev dependecy @rescripts/cli and in package.json needed to adapt the config for the start, build, test and eject scripts.
- To use this app as a micro-app for Qiankun, we needed to modify index.tsx and expose a number of functions, example: mount, unmount, update etc. This allows Quiankun (setup in the Parent shell app) to interact with this micro-app.
- Qiankun github code has an exmple on how to configure the micro-app, but this app is React 18 and their example was based on React 16, so we needed to deviate a bit form the example to take into consideration the difference in how React 18 uses ReactDom.createRoot and how it differes in mounting and unmounting to React 16. If you do want to configure React 16 as a micro-app then see [https://github.com/umijs/qiankun/tree/master/examples/react16](https://github.com/umijs/qiankun/tree/master/examples/react16)


## Notes from create react app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
