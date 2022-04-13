// Keep me in line with https://github.com/apollographql/apollo-server/blob/main/packages/apollo-server-core/src/plugin/landingPage/default/index.ts#L56

export interface CommonLandingPageConfig {
  isProd?: boolean;
  apolloStudioEnv?: 'staging' | 'prod';
  document?: string;
  variables?: Record<string, string>;
  headers?: Record<string, string>;
  includeCookies?: boolean;
}

export interface StudioLandingPageConfig extends CommonLandingPageConfig {
  graphRef?: string | undefined;
  footer?: boolean;
}

export interface EmbeddedLandingPageConfig extends CommonLandingPageConfig {
  graphRef: string;
  displayOptions?: {
    showHeadersAndEnvVars?: boolean;
    docsPanelState?: 'open' | 'closed';
    theme?: 'dark' | 'light';
  };
  persistExplorerState?: boolean;
}

export type LandingPageConfig =
  | ({
      shouldEmbed: true;
    } & EmbeddedLandingPageConfig)
  | ({
      shouldEmbed: false;
    } & StudioLandingPageConfig);
