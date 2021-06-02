import React from 'react';
import { Meta } from '@storybook/react';
import LocalUnconfiguredComponent from '../content/LocalUnconfigured';
import ProdUnconfiguredComponent from '../content/ProdUnconfigured';
import ProdConfiguredComponent from '../content/ProdConfigured';
import LandingPageBackgroundWrapper from '../components/LandingPageBackgroundWrapper';

export default {
  title: 'Studio Landing Page/Landing Pages',
} as Meta;

const LandingPageStoryWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      overflowX: 'hidden',
      overflowY: 'auto',
    }}
  >
    <LandingPageBackgroundWrapper>{children}</LandingPageBackgroundWrapper>
  </div>
);

export const LocalUnconfigured = () => (
  <LandingPageStoryWrapper>
    <LocalUnconfiguredComponent
      baseUrl="https://studio.apollographql.com"
      endpoint="https://localhost:4000"
    />
  </LandingPageStoryWrapper>
);

export const ProdUnconfigured = () => (
  <LandingPageStoryWrapper>
    <ProdUnconfiguredComponent endpoint="https://localhost:4000" />
  </LandingPageStoryWrapper>
);

export const ProdConfigured = () => (
  <LandingPageStoryWrapper>
    <ProdConfiguredComponent
      baseUrl="https://studio.apollographql.com"
      endpoint="https://localhost:4000"
      graphName="testGraph"
      variant="current"
    />
  </LandingPageStoryWrapper>
);
