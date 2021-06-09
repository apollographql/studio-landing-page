import React from 'react';
import { Meta } from '@storybook/react';
import { css, Global } from '@emotion/react';
import LocalUnconfiguredComponent from '../content/LocalUnconfigured';
import ProdUnconfiguredComponent from '../content/ProdUnconfigured';
import ProdConfiguredComponent from '../content/ProdConfigured';
import LandingPageBackgroundWrapper from '../components/LandingPageBackgroundWrapper';

export default {
  title: 'Studio Landing Page/Landing Pages',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (storyFn: () => React.ReactElement<unknown>) => (
      <>
        <Global
          styles={css`
            html,
            body,
            #root {
              height: 100%;
              margin: 0;
            }
          `}
        />
        <LandingPageBackgroundWrapper>{storyFn()}</LandingPageBackgroundWrapper>
      </>
    ),
  ],
} as Meta;

export const LocalUnconfigured = () => (
  <LocalUnconfiguredComponent
    baseUrl="https://studio.apollographql.com"
    endpoint="https://localhost:4000"
  />
);

export const LocalUnconfiguredWithReallyLongEndpoint = () => (
  <LocalUnconfiguredComponent
    baseUrl="https://studio.apollographql.com"
    endpoint="https://499d67ec-9864-4597-bbc1-8d21f55f88b3.35a76308-3181-4efd-a46a-2a5eb6e72ffb.com/api/graphql"
  />
);

export const ProdUnconfigured = () => (
  <ProdUnconfiguredComponent endpoint="https://localhost:4000" />
);

export const ProdConfigured = () => (
  <ProdConfiguredComponent
    baseUrl="https://studio.apollographql.com"
    endpoint="https://localhost:4000"
    graphRef="testGraph@staging"
  />
);
