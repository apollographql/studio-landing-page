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
    schema: schemaFromApolloServer,
  } = config;

  const endpoint = window.location.href;
  const stableHeaders = useMemo(() => defaultHeaders ?? {}, [defaultHeaders]);

  // TODO(maya): when you have exposed a way to set error on the
  // ApolloExplorerReact component & the EmbeddedExplorer class,
  // pass this error through to be shown on the AS embed page the same way
  const {
    schema: schemaFromIntrospection,
    error,
  } = useSchemaFromEndpointIntrospection({
    endpoint,
    stableHeaders,
    includeCookies: !!includeCookies,
    pollInterval: schemaPollIntervalMs ?? 5000,
    /**
     * We have two options for grabbing your schema for the embedded Explorer.
     * If you have a Studio graph, you can specify that graphRef,
     * and we will render the Explorer of your private graph using that registered schema.
     *
     * You also have the option to just use the schema running on this Apollo Server
     * instance.
     *
     * Apollo Server should send us everyone's schema who doesn't specify a graphRef,
     * but we can continue to poll for changes on gateways only.
     * If you are not running a gateway, and you haven't specified
     * the schemaPollIntervalMs, we don't introspect your graph.
     * If you are running a gateway, the schemaPollIntervalMs
     * defaults to 5000 & we will introspect your graph.
     */ skip:
      !!graphRef || (schemaPollIntervalMs === 0 && !!schemaFromApolloServer),
    skipPolling: schemaPollIntervalMs === 0,
  });

  const schema = schemaFromIntrospection ?? schemaFromApolloServer;

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
