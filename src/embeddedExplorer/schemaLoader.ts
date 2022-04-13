import {
  BuildSchemaOptions,
  getIntrospectionQuery,
  IntrospectionOptions,
  IntrospectionQuery,
} from 'graphql';

export type SchemaConfig = {
  uri: string;
  requestOpts?: Omit<RequestInit, 'headers'> & {
    headers: Record<string, string> | undefined;
  };
  introspectionOptions?: IntrospectionOptions;
  buildSchemaOptions?: BuildSchemaOptions;
};

export type SchemaResponse = {
  data?: IntrospectionQuery;
  errors?: { message: string }[];
};

export function headersWithContentType(headers: Record<string, string>) {
  const processedHeaders: Record<string, string> = { ...headers };
  if (
    Object.keys(processedHeaders).every(
      (key) => key.toLowerCase() !== 'content-type',
    )
  ) {
    processedHeaders['content-type'] = 'application/json';
  }
  return processedHeaders;
}

export const schemaLoader: (
  config: SchemaConfig,
) => Promise<SchemaResponse> = async (schemaConfig: SchemaConfig) => {
  const { requestOpts, uri, introspectionOptions } = schemaConfig;
  const fetchResult = await fetch(uri, {
    method: requestOpts?.method ?? 'post',
    body: JSON.stringify({
      query: getIntrospectionQuery(introspectionOptions),
      operationName: 'IntrospectionQuery',
    }),
    credentials: 'omit',
    ...requestOpts,
    headers: headersWithContentType(requestOpts?.headers ?? {}),
  });
  const introspectionResponse: {
    data?: IntrospectionQuery;
    errors?: { message: string }[];
  } = await fetchResult.json();
  return introspectionResponse;
};
