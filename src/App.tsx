/** @jsxImportSource @emotion/react */
import React from 'react';
import LandingPageBackgroundWrapper from './components/LandingPageBackgroundWrapper';
import LocalUnconfigured from './content/LocalUnconfigured';
import ProdConfigured from './content/ProdConfigured';
import ProdUnconfigured from './content/ProdUnconfigured';

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

  const { graphRef } = window.landingPage
    ? JSON.parse(window.landingPage)
    : { graphRef: undefined };
  const isProdEnv = process.env.NODE_ENV === 'production';
  const endpoint = window.location.href;

  return (
    <LandingPageBackgroundWrapper>
      {!!graphRef && isProdEnv ? (
        <ProdConfigured
          endpoint={endpoint}
          graphName={graphRef.substring(0, graphRef.indexOf('@'))}
          variant={graphRef.substring(graphRef.indexOf('@') + 1)}
        />
      ) : isProdEnv ? (
        <ProdUnconfigured endpoint={endpoint} />
      ) : (
        <LocalUnconfigured endpoint={endpoint} />
      )}
    </LandingPageBackgroundWrapper>
  );
};
