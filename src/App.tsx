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
//     shouldEmbed: true,
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

  return config.shouldEmbed ? (
    config.graphRef && config.isProd ? (
      <EmbeddedExplorer config={config} />
    ) : (
      // TODO use embedded sandbox when this is not prod / no graphRef
      // <EmbeddedSandbox />
      <div />
    )
  ) : (
    <LandingPage config={config} />
  );
};
