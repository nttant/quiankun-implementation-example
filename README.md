# Qiankun Micro-frontend implementation example

Please note the mis-spelling of this repo: https://github.com/nttant/quiankun-implementation-example. It should have been Qiankun and not Quiankun

## About

The parent app is the parent shell app that controls the header, nav and footer and registers various micro-apps which will load at certain page urls.

The parent app is created with the latest Next app (as at 1 May 2022). This means that SSR for the parent app is ok. Note the navigation must be SSR so we are not using Next Link for nav. 

When normal a links are used in the parent app for navigation (as opposed to Next Link) the nave works perfectly but on occasion the pages flashes as content loads. I experminted using Next Link for nav and that removed the flash but if you navigate too quickly then this error occurs: NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node. So don;t use Next Link for navigation.

The micro-app children apps (app1 and app2) are client-side only apps created with create-react-app. Next aparentky does not work as mico-apps with Qiankun dues to the architecture of Next JS.

An alsternative to Next JS couild be to use UmiJS [https://umijs.org/](https://umijs.org/) for both the parent and child micro-apps. UmiJS can be configured to use SSR and the configuration to turn it into a Qiankun micro-app is a one liner in the plugin config.

## Parent

This is the parent shell app (Next JS)
See /parent directory and README.md

## App1

This is a child micro-app (React)
See /app1 directory and README.md
This app might take a while to start

## App2

This is a child micro-app (React)
See /app2 directory and README.md
This app might take a while to start

## Getting started

- cd into app1 and app2 directories
- install dependencis in each app ```yarn```
- create a .env file in app1 root directory
- add the following in the .env for app1
```
SKIP_PREFLIGHT_CHECK=true
BROWSER=none
PORT=3001
WDS_SOCKET_PORT=3001
```
- create a .env file in the root of app2
- add the following in the .env for app1
```
SKIP_PREFLIGHT_CHECK=true
BROWSER=none
PORT=3002
WDS_SOCKET_PORT=3002
```
- start app1 and app2 by running the following in each root directpory in your terminal
```yarn start```
- cd into the parent directory
- run ```yarn```
- start the parent app ```yarn dev``` note that this is different to the other apps as this is Next JS
- visit http://localhost:3000 to see the parent app
- click app1 and app2 links in the nav to see the micro-apps load
- to see the individual micro apps, see http://localhost:3001 and http://localhost:3002

We still need to investigate:

- How to prevent duplication of modules and how to load them optimally. SystemJS might be a good option for this [https://github.com/systemjs/systemjs](https://github.com/systemjs/systemjs)
- How to share state between micro-frontends. Although micro-frontends should share minimal state. Some ideas for state sharing [https://dev.to/luistak/cross-micro-frontends-communication-30m3] (https://dev.to/luistak/cross-micro-frontends-communication-30m3) And another state management option that ciould be explored is [https://www.npmjs.com/package/zustand](https://www.npmjs.com/package/zustand)

Please read the README,md files in parent and as well as app1 ands app2 README's for implementation notes and important aspects of what configuration was made.

