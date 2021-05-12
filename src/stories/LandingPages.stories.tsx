import React from 'react';
import { Meta } from '@storybook/react';
import LocalUnconfiguredComponent from '../LocalUnconfigured';

export default {
  title: 'Studio Landing Page/Landing Pages',
} as Meta;

export const LocalUnconfigured = () => (
  <LocalUnconfiguredComponent endpoint="localhost:4000" />
);
