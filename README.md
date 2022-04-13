# Apollo Server Landing Pages

This is a create-react-app that accepts a window var for configuration of the Apollo Server Landing Pages. These pages are uploaded to a CDN bucket and will be served by some html in an Apollo Server Plugin in AS3. 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Developing

This repo is a webapp with an entry in `index.tsx`. The webapp operates on the assumption that certain parameters have been set on window.landingPage by `apollo-server` which is the [only place the built files in this repo are fetched](https://github.com/apollographql/apollo-server/blob/main/packages/apollo-server-core/src/plugin/landingPage/default/index.ts#L207-L208). 

If you want to test the landing pages, you can `npm run build` and `npm run start`, open [http://localhost:3000](http://localhost:3000) in your browser, and setting `window.landingPage` in App.tsx, outside of the react component.

The shape of `window.landingPage` should be [LandingPageConfig](https://github.com/apollographql/apollo-server/blob/main/packages/apollo-server-core/src/plugin/landingPage/default/index.ts#L56), either the Embed landing page config or the Studio landing page config.

For example:

Studio landing page config
```
window.landingPage = encodeURIComponent(
  JSON.stringify({
    graphRef: 'acephei@current',
    isProd: false,
    apolloStudioEnv: 'prod',
    document: 'test',
    variables: { test: 'value' },
    headers: { test: 'value' },
    includeCookies: false,
    footer: true,
    shouldEmbed: false,
  }),
);

```

Embedded Explorer landing page config
```
window.landingPage = encodeURIComponent(
  JSON.stringify({
    graphRef: 'acephei@current',
    isProd: true,
    document: 'test',
    variables: { test: 'value' },
    headers: { test: 'value' },
    includeCookies: false,
    shouldEmbed: false,
    displayOptions: {
      showHeadersAndEnvVars: true,
      docsPanelState: 'open',
      theme: 'dark',
    },
    persistExplorerState: true,
  }),
);

```
