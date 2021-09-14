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
    document: encodedDocument,
    variables: encodedVariables,
    headers: encodedHeaders,
  }: {
    graphRef: string | undefined;
    isProd: boolean;
    footer: boolean;
    apolloStudioEnv: 'staging' | 'prod';
    document: string;
    variables: string;
    headers: string;
  } = {
    graphRef: undefined,
    isProd: false,
    footer: true,
    apolloStudioEnv: 'prod',
    ...(window.landingPage &&
      JSON.parse(decodeURIComponent(window.landingPage))),
  };

  const queryParams = {
    document: encodedDocument,
    variables: encodedVariables,
    headers: encodedHeaders,
  };

  const endpoint = window.location.href;
  const baseUrl = `https://studio${
    apolloStudioEnv === 'staging' ? '-staging' : ''
  }.apollographql.com`;
  // https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
  const getCookieValue = (name: string) =>
    document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() || '';
  const pageIsEmbedded = isEmbedded();

  const getAdditionalQueryParams = (hasInitialQueryParams: boolean) =>
    Object.entries(queryParams).reduce((allParams, [key, value]) => {
      if (value) {
        const queryParamString =
          allParams.length === 0 && !hasInitialQueryParams
            ? `?${key}=${value}`
            : `&${key}=${value}`;
        allParams.push(queryParamString);
      }
      return allParams;
    }, [] as Array<string>);

  const studioLink = isProd
    ? `${baseUrl}/graph/${graphRef}/explorer${getAdditionalQueryParams(false)}`
    : `${baseUrl}/sandbox?endpoint=${encodeURIComponent(
        window.location.href,
      )}${getAdditionalQueryParams(true)}`;
  // Studio's security rules (frame-ancestors) prevent it from running in an iframe,
  // so we avoid redirecting to a page that won't load.
  if (!pageIsEmbedded) {
    if (
      isProd &&
      !!graphRef &&
      getCookieValue(prodRedirectCookie(graphRef)) === 'true'
    ) {
      window.location.replace(studioLink);
    } else if (!isProd && getCookieValue(localRedirectCookie) === 'true') {
      window.location.replace(studioLink);
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
    </>
  );
};
