# Parent (shell) app

This parent app uses Qiankun to implement a micro-frontend architecture.
The parent app can be SSR but the child micro-apps need to be CSR, so we can use Next.js for the parent and normal creat react app for children. For more infor see [https://qiankun.umijs.org/](https://qiankun.umijs.org/)

## Getting started

First follow the instructions in README.md in micro app 1 and README.md micro app 2

Then in this app dirtectory:

```yarn```

```yarn dev```

This parent app will be available at http://localhost:3000 and will contain the micor apps. The micro apps will be included in the page when their paths are active.

This example uses Next with Qiankun [https://www.npmjs.com/package/qiankun](https://www.npmjs.com/package/qiankun) to implement the micro-frontend architecture.

The micro apps (app 1 and app 2) are clientside apps created with create-react-app

### Take note of the following:

- _app.tsx renders a MainView component and that contains the qiankun configuration. See components/MainView.tsx and it gets the configuration for a the mirco-apps from registerMicroAppsConfig.ts
- We needed to deviate a bit from the Qiankun example and guide for settings in registerMicroAppsConfig.ts as this version of Next JS uses webpack 5 and the example and guide docs references an older version of webpack
- registerMicroAppsConfig.ts is in the root of this project. For more information on configuration see [https://qiankun.umijs.org/api](https://qiankun.umijs.org/api)
- pages/page-app-1.tsx and pages/page-app-2.tsx are page paths that the micro apps will use and they correspond to the config in registerMicroAppsConfig.ts. Note that the pages return null.
- Pages in this parent (shell) app that don't need a micro app are just normal Next.js pages - see pages/index.tsx

## Notes from create next app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
