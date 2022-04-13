/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React, { useMemo } from 'react';
import { ApolloExplorerReact } from '@apollo/explorer';
import { EmbeddedLandingPageConfig } from '../LandingPageConfig';

export default ({ config }: { config: EmbeddedLandingPageConfig }) => {
  const {
    graphRef,
    document: defaultDocument,
    variables: defaultVariables,
    headers: defaultHeaders,
    displayOptions,
    persistExplorerState,
    includeCookies,
  } = config;

  const endpoint = window.location.href;

  return (
    <>
      <Global
        styles={css`
          html,
          body,
          #react-root {
            height: 100%;
            margin: 0;
            overflow: hidden;
          }
          .embedded-explorer {
            width: 100%;
            height: 100%;
          }

          .embedded-explorer > iframe {
            border: none;
          }
        `}
      />
      <ApolloExplorerReact
        className="embedded-explorer"
        initialState={{
          document: defaultDocument,
          headers: defaultHeaders,
          variables: defaultVariables,
          displayOptions: displayOptions || {},
        }}
        endpointUrl={endpoint}
        graphRef={graphRef}
        persistExplorerState={persistExplorerState}
      />
    </>
  );
};
