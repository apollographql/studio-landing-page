import React, { useMemo } from 'react';
import EmbeddedExplorer from './embeddedExplorer/EmbeddedExplorer';
import LandingPage from './landingPage/LandingPage';
import { LandingPageConfig } from './LandingPageConfig';

// Uncomment and change values for testing

// window.landingPage = encodeURIComponent(
//   JSON.stringify({
//     // graphRef: 'acephei@current',
//     isProd: false,
//     apolloStudioEnv: 'prod',
//     document: 'test',
//     variables: { test: 'value' },
//     headers: { test: 'value' },
//     includeCookies: false,
//     footer: true,
//     shouldEmbedExplorer: true,
//     schemaPollIntervalMs: 5000,
//     embedDisplayOptions: {
//       showHeadersAndEnvVars: true,
//       docsPanelState: 'open',
//       theme: 'dark',
//     },
//     persistExplorerState: true,
//   }),
// );

export default () => {
  const config: LandingPageConfig = useMemo(
    () => ({
      shouldEmbedExplorer: false,
      ...(window.landingPage &&
        JSON.parse(decodeURIComponent(window.landingPage))),
    }),
    [window.landingPage],
  );

  return config.shouldEmbedExplorer ? (
    <EmbeddedExplorer config={config} />
  ) : (
    // </Suspense>
    <LandingPage config={config} />
  );
};
