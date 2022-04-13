/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React, { useMemo } from 'react';
import { ApolloExplorerReact } from '@apollo/explorer';
import { useSchemaFromEndpointIntrospection } from './useSchemaFromEndpointIntrospection';
import { EmbeddedLandingPageConfig } from '../LandingPageConfig';

export default ({ config }: { config: EmbeddedLandingPageConfig }) => {
  const {
    graphRef,
    document: defaultDocument,
    variables: defaultVariables,
    headers: defaultHeaders,
    embedDisplayOptions,
    persistExplorerState,
    includeCookies,
    schemaPollIntervalMs,
  } = config;

  const endpoint = window.location.href;
  const stableHeaders = useMemo(() => defaultHeaders ?? {}, [defaultHeaders]);

  // TODO(maya): when you have exposed a way to set error on the
  // ApolloExplorerReact component & the EmbeddedExplorer class,
  // pass this error through to be shown on the AS embed page the same way
  const { schema, error } = useSchemaFromEndpointIntrospection({
    endpoint,
    stableHeaders,
    includeCookies: !!includeCookies,
    pollInterval: schemaPollIntervalMs ?? 5000,
    skip: !!graphRef,
    skipPolling: schemaPollIntervalMs === 0,
  });

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
      {graphRef ? (
        <ApolloExplorerReact
          className="embedded-explorer"
          initialState={{
            document: defaultDocument,
            headers: defaultHeaders,
            variables: defaultVariables,
            displayOptions: embedDisplayOptions || {},
          }}
          endpointUrl={endpoint}
          graphRef={graphRef}
          persistExplorerState={persistExplorerState}
        />
      ) : (
        schema && (
          <ApolloExplorerReact
            className="embedded-explorer"
            initialState={{
              document: defaultDocument,
              headers: defaultHeaders,
              variables: defaultVariables,
              displayOptions: embedDisplayOptions || {},
            }}
            endpointUrl={endpoint}
            schema={schema}
            persistExplorerState={persistExplorerState}
          />
        )
      )}
    </>
  );
};
