/** @jsxImportSource @emotion/react */
import { CacheProvider, css, Global } from '@emotion/react';
import React from 'react';
import createCache from '@emotion/cache';
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

// If there's a nonce on the page, we need to pass it to emotion so that it can
// add it to the styles it injects into the page.
const nonce =
  document.querySelector<HTMLOrSVGScriptElement>('script[nonce]')?.nonce;
const emotionCache = createCache({
  key: 'studio-landing-page',
  nonce,
});

export default () => {
  const {
    graphRef,
    isProd,
    footer,
    apolloStudioEnv,
    document: defaultDocument,
    variables: defaultVariables,
    headers: defaultHeaders,
    includeCookies: defaultIncludeCookies,
  }: {
    graphRef: string | undefined;
    isProd: boolean;
    footer: boolean;
    apolloStudioEnv: 'staging' | 'prod';
    document?: string;
    variables?: Record<string, string>;
    headers?: Record<string, string>;
    includeCookies?: boolean;
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

  const getQueryParamString = () => {
    const queryParams: {
      document?: string;
      variables?: string;
      headers?: string;
      endpoint?: string;
      includeCookies?: string;
    } = {
      document: defaultDocument,
      variables: JSON.stringify(defaultVariables),
      headers: JSON.stringify(defaultHeaders),
      endpoint: isProd ? undefined : window.location.href,
      includeCookies: defaultIncludeCookies ? 'true' : undefined,
    };
    let queryParamString = '';
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value) {
        queryParamString += `&${key}=${encodeURIComponent(value)}`;
      }
    });
    return queryParamString.length ? `?${queryParamString.slice(1)}` : '';
  };

  const studioLink =
    isProd && !!graphRef
      ? `${baseUrl}/graph/${graphRef}/explorer${getQueryParamString()}`
      : `${baseUrl}/sandbox${getQueryParamString()}`;

  /* Studio's security rules (frame-ancestors) prevent it from running in an iframe,
   * so we avoid redirecting to a page that won't load.
   */
  if (
    !pageIsEmbedded &&
    ((!!graphRef &&
      isProd &&
      getCookieValue(prodRedirectCookie(graphRef)) === 'true') ||
      (!isProd && getCookieValue(localRedirectCookie) === 'true'))
  ) {
    window.location.replace(studioLink);
  }

  return (
    <CacheProvider value={emotionCache}>
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
            studioLink={studioLink}
            endpoint={endpoint}
            graphRef={graphRef}
            isEmbedded={pageIsEmbedded}
          />
        ) : isProd ? (
          <ProdUnconfigured endpoint={endpoint} />
        ) : (
          <LocalUnconfigured
            studioLink={studioLink}
            endpoint={endpoint}
            isEmbedded={pageIsEmbedded}
          />
        )}
      </LandingPageBackgroundWrapper>
    </CacheProvider>
  );
};
