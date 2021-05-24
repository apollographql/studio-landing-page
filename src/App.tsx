/** @jsxImportSource @emotion/react */
import React from 'react';
import LandingPageBackgroundWrapper from './components/LandingPageBackgroundWrapper';
import LocalUnconfigured from './content/LocalUnconfigured';
import ProdConfigured from './content/ProdConfigured';
import ProdUnconfigured from './content/ProdUnconfigured';

import('./test-async').then((fn: any) => fn());

export default () => {
  // https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
  const getCookieValue = (name: string) =>
    document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() || '';
  if (getCookieValue('redirect') === 'true') {
    window.location.replace(
      `https://local.apollographql.dev?endpoint=${encodeURIComponent(
        window.location.href,
      )}`,
    );
  }

  const { graphRef, isConfigured = false } = window.landingPage
    ? JSON.parse(window.landingPage)
    : { graphRef: undefined };
  const endpoint = window.location.href;
  // TODO check with glasser what constitutes a configured graph.

  return (
    <LandingPageBackgroundWrapper>
      {!!graphRef && isConfigured ? (
        <ProdConfigured
          endpoint={endpoint}
          graphName={graphRef.substring(0, graphRef.indexOf('@'))}
          variant={graphRef.substring(graphRef.indexOf('@') + 1)}
        />
      ) : graphRef ? (
        <ProdUnconfigured endpoint={endpoint} />
      ) : (
        <LocalUnconfigured endpoint={endpoint} />
      )}
    </LandingPageBackgroundWrapper>
  );
};
