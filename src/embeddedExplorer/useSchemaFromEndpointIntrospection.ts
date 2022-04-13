import type { IntrospectionQuery } from 'graphql';
import { useCallback, useEffect, useState } from 'react';
import { schemaLoader, SchemaResponse } from './schemaLoader';

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
  const [error, setError] = useState<string>();

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
      setError(
        'We were not able to introspect your schema because we were not able to reach your endpoint.',
      );
    }
    if (!schemaResponse.data) {
      setError(
        schemaResponse.errors
          ? 'Introspection is disabled on your endpoint. To use the embedded Explorer, we need to introspect your schema.'
          : 'Something went wrong trying to introspect your schema.',
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
