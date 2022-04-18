import type { IntrospectionQuery } from 'graphql';
import { useCallback, useEffect, useState } from 'react';
import { schemaLoader, SchemaResponse } from './schemaLoader';
// This needs to be kept up with
// https://github.com/mdg-private/studio-ui/blob/main/src/app/graph/explorerPage/hooks/useExplorerState/useSchema/useSchemaFromEndpointIntrospection/useSchemaFromEndpointIntrospection.ts#L26-L38
export type IntrospectionFailure =
  // No endpoint has been set
  | 'noEndpointProvided'
  // Endpoint is unreachable
  | 'unableToReachEndpoint'
  // Endpoint is reachable but introspection response was not a valid graphql
  // response
  | 'invalidIntrospectionResponse'
  // Endpoint is reachable but introspection is disabled
  | 'introspectionDisabled'
  // Endpoint is reachable but schema returned from introspection request is
  // invalid
  | 'invalidIntrospectionSchema';

export const useSchemaFromEndpointIntrospection = ({
  endpoint,
  stableHeaders,
  includeCookies,
  skip,
  skipPolling,
  pollInterval,
}: {
  endpoint: string;
  stableHeaders: Record<string, string>;
  includeCookies: boolean;
  skip: boolean;
  skipPolling: boolean;
  pollInterval: number;
}) => {
  const [schema, setSchema] = useState<IntrospectionQuery>();
  const [error, setError] = useState<IntrospectionFailure>();

  const refreshSchema = useCallback(async () => {
    const schemaResponse = await schemaLoader({
      uri: endpoint,
      requestOpts: {
        headers: stableHeaders,
        ...(includeCookies ? { credentials: 'include' } : {}),
      },
      introspectionOptions: {
        inputValueDeprecation: false,
      },
    });
    if (!schemaResponse) {
      setError('unableToReachEndpoint');
    }
    if (!schemaResponse.data) {
      setError(
        schemaResponse.errors
          ? 'introspectionDisabled'
          : 'invalidIntrospectionResponse',
      );
    }
    setSchema(schemaResponse.data);
  }, [endpoint, stableHeaders, includeCookies]);

  // Refresh the schema once on load
  useEffect(() => {
    if (skip) {
      setSchema(undefined);
      setError(undefined);
    } else {
      refreshSchema();
    }
  }, [refreshSchema, skip]);

  useEffect(() => {
    if (skipPolling || skip) {
      return;
    }

    // poll for changes to schema
    const loadSchemaIntervalId = window.setInterval(
      refreshSchema,
      pollInterval,
    );
    return () => window.clearInterval(loadSchemaIntervalId);
  }, [skip, pollInterval, refreshSchema, skipPolling]);

  return { schema, error };
};
