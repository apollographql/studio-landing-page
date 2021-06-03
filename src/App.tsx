/** @jsxImportSource @emotion/react */
import React from 'react';
import LandingPageBackgroundWrapper from './components/LandingPageBackgroundWrapper';
import LocalUnconfigured from './content/LocalUnconfigured';
import ProdConfigured from './content/ProdConfigured';
import ProdUnconfigured from './content/ProdUnconfigured';

export default () => {
  const {
    graphRef,
    isProd,
    apolloStudioEnv,
  }: {
    graphRef: string;
    isProd: boolean;
    apolloStudioEnv: 'staging' | 'prod';
  } = {
    graphRef: undefined,
    isProd: false,
    apolloStudioEnv: 'prod',
    ...(window.landingPage &&
      JSON.parse(decodeURIComponent(window.landingPage))),
  };
  const endpoint = window.location.href;
  const configured = !!graphRef;
  const baseUrl = `https://studio${
    apolloStudioEnv === 'staging' ? '-staging' : ''
  }.apollographql.com`;

  // https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
  const getCookieValue = (name: string) =>
    document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() || '';
  if (getCookieValue('redirect') === 'true') {
    window.location.replace(
      `${baseUrl}/sandbox?endpoint=${encodeURIComponent(window.location.href)}`,
    );
  }

  return (
    <LandingPageBackgroundWrapper>
      {configured && isProd ? (
        <ProdConfigured
          baseUrl={baseUrl}
          endpoint={endpoint}
          graphName={graphRef.substring(0, graphRef.indexOf('@'))}
          variant={graphRef.substring(graphRef.indexOf('@') + 1)}
        />
      ) : isProd ? (
        <ProdUnconfigured endpoint={endpoint} />
      ) : (
        <LocalUnconfigured baseUrl={baseUrl} endpoint={endpoint} />
      )}
    </LandingPageBackgroundWrapper>
  );
};
