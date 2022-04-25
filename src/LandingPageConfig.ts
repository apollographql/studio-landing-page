// Keep me in line with https://github.com/apollographql/apollo-server/blob/main/packages/apollo-server-core/src/plugin/landingPage/default/index.ts#L56

export interface StudioLandingPageConfig {
  graphRef?: string | undefined;
  isProd?: boolean;
  apolloStudioEnv?: 'staging' | 'prod';
  document?: string;
  variables?: Record<string, string>;
  headers?: Record<string, string>;
  includeCookies?: boolean;
  footer?: boolean;
}

export interface EmbeddedLandingPageConfig {
  graphRef?: string | undefined;
  document?: string;
  variables?: Record<string, string>;
  headers?: Record<string, string>;
  includeCookies?: boolean;
  schemaPollIntervalMs?: number;
  // Initial schema from Apollo Server
  initialSchema?: string;
  displayOptions?: {
    showHeadersAndEnvVars?: boolean;
    docsPanelState?: 'open' | 'closed';
    theme?: 'dark' | 'light';
  };
  persistExplorerState?: boolean;
}

export type LandingPageConfig =
  | ({
      shouldEmbedExplorer: true;
    } & EmbeddedLandingPageConfig)
  | ({
      shouldEmbedExplorer: false;
    } & StudioLandingPageConfig);
