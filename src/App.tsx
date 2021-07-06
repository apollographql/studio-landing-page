/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';
import LandingPageBackgroundWrapper from './components/LandingPageBackgroundWrapper';
import LocalUnconfigured from './content/LocalUnconfigured';
import ProdConfigured from './content/ProdConfigured';
import ProdUnconfigured from './content/ProdUnconfigured';
import isEmbedded from './isEmbedded';

export const prodRedirectCookie = (graphRef: string) =>
  `apollo-server-landing-page-redirect-to-studio-prod-${encodeURIComponent(
    graphRef,
  )}`;
export const localRedirectCookie =
  'apollo-server-landing-page-redirect-to-studio-local';

export default () => {
  const {
    graphRef,
    isProd,
    footer,
    apolloStudioEnv,
  }: {
    graphRef: string | undefined;
    isProd: boolean;
    footer: boolean;
    apolloStudioEnv: 'staging' | 'prod';
  } = {
    graphRef: undefined,
    isProd: false,
    footer: true,
    apolloStudioEnv: 'prod',
    ...(window.landingPage &&
      JSON.parse(decodeURIComponent(window.landingPage))),
  };
  const endpoint = window.location.href;
  const baseUrl = `https://studio${
    apolloStudioEnv === 'staging' ? '-staging' : ''
  }.apollographql.com`;
  // https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
  const getCookieValue = (name: string) =>
    document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() || '';
  const pageIsEmbedded = isEmbedded();

  // Studio's security rules (frame-ancestors) prevent it from running in an iframe,
  // so we avoid redirecting to a page that won't load.
  if (!pageIsEmbedded) {
    if (
      isProd &&
      !!graphRef &&
      getCookieValue(prodRedirectCookie(graphRef)) === 'true'
    ) {
      window.location.replace(`${baseUrl}/graph/${graphRef}/explorer`);
    } else if (!isProd && getCookieValue(localRedirectCookie) === 'true') {
      window.location.replace(
        `${baseUrl}/sandbox?endpoint=${encodeURIComponent(
          window.location.href,
        )}`,
      );
    }
  }

  return (
    <>
      <Global
        styles={css`
          html,
          body,
          #react-root {
            height: 100%;
            margin: 0;
          }
        `}
      />
      <LandingPageBackgroundWrapper showFooter={footer}>
        {isProd && !!graphRef ? (
          <ProdConfigured
            baseUrl={baseUrl}
            endpoint={endpoint}
            graphRef={graphRef}
            isEmbedded={pageIsEmbedded}
          />
        ) : isProd ? (
          <ProdUnconfigured endpoint={endpoint} />
        ) : (
          <LocalUnconfigured
            baseUrl={baseUrl}
            endpoint={endpoint}
            isEmbedded={pageIsEmbedded}
          />
        )}
      </LandingPageBackgroundWrapper>
    </>
  );
};
