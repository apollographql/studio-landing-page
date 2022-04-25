/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React, { useMemo, useEffect, useState } from 'react';
import { ApolloExplorerReact } from '@apollo/explorer';
import { useSchemaFromEndpointIntrospection } from './useSchemaFromEndpointIntrospection';
import { EmbeddedLandingPageConfig } from '../LandingPageConfig';

export const INTROSPECTION_QUERY_WITH_HEADERS = 'IntrospectionQueryWithHeaders';

type IncomingMessageEvent =
  | MessageEvent
  | MessageEvent<{
      name: 'IntrospectionQueryWithHeaders';
      introspectionRequestBody: string;
      introspectionRequestHeaders: Record<string, string>;
    }>;

export default ({ config }: { config: EmbeddedLandingPageConfig }) => {
  const {
    graphRef,
    document: defaultDocument,
    variables: defaultVariables,
    headers: defaultHeaders,
    displayOptions,
    persistExplorerState,
    includeCookies,
    schemaPollIntervalMs,
    initialSchema: schemaFromApolloServer,
  } = config;

  const [
    introspectionRequestBody,
    setIntrospectionRequestBody,
  ] = useState<string>();
  const [
    introspectionRequestHeaders,
    setIntrospectionRequestHeaders,
  ] = useState<Record<string, string>>();

  const endpoint = window.location.href;
  const stableHeaders = useMemo(
    () => introspectionRequestHeaders ?? defaultHeaders ?? {},
    [defaultHeaders, introspectionRequestHeaders],
  );

  // The headers / env vars may change as the user edits them in the embed
  // the embed sends us the new headers w env vars & introspection body when that happens
  useEffect(() => {
    const handleReceiveIntrospectionQuery = (event: IncomingMessageEvent) => {
      if (
        'name' in event.data &&
        'introspectionRequestBody' in event.data &&
        'introspectionRequestHeaders' in event.data
      ) {
        setIntrospectionRequestBody(event.data.introspectionRequestBody);
        setIntrospectionRequestHeaders(event.data.introspectionRequestHeaders);
      }
    };
    window.addEventListener('message', handleReceiveIntrospectionQuery);

    return () => {
      window.removeEventListener('message', handleReceiveIntrospectionQuery);
    };
  }, [setIntrospectionRequestBody, setIntrospectionRequestHeaders]);

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
    introspectionBody: introspectionRequestBody,
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
            displayOptions: displayOptions || {},
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
              displayOptions: displayOptions || {},
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
