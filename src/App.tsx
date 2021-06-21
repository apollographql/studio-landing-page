/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';
import LandingPageBackgroundWrapper from './components/LandingPageBackgroundWrapper';
import LocalUnconfigured from './content/LocalUnconfigured';
import ProdConfigured from './content/ProdConfigured';
import ProdUnconfigured from './content/ProdUnconfigured';

export const prodRedirectCookie =
  'apollo-server-landing-page-redirect-to-studio-prod';
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

  if (isProd && !!graphRef && getCookieValue(prodRedirectCookie) === 'true') {
    window.location.replace(`${baseUrl}/graph/${graphRef}/explorer`);
  } else if (getCookieValue(localRedirectCookie) === 'true') {
    window.location.replace(
      `${baseUrl}/sandbox?endpoint=${encodeURIComponent(window.location.href)}`,
    );
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
          />
        ) : isProd ? (
          <ProdUnconfigured endpoint={endpoint} />
        ) : (
          <LocalUnconfigured baseUrl={baseUrl} endpoint={endpoint} />
        )}
      </LandingPageBackgroundWrapper>
    </>
  );
};
