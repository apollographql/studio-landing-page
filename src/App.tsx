import React from 'react';
import LocalUnconfigured from './LocalUnconfigured';

export default () => {
  // https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
  const getCookieValue = (name: string) =>
    document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() || '';
  if (getCookieValue('redirect') === 'true') {
    window.location.replace(
      `https://local.apollographql.dev?endpoint=${encodeURIComponent(
        window.location.href,
      )}`,
    );
  }

  const isProdGraph = !!window.graphRef;
  const isConfigured = false; // TODO check with glasser what constitutes a configured graph
  return isProdGraph && isConfigured ? (
    <ProdConfigured />
  ) : isProdGraph ? (
    <ProdUnconfigured />
  ) : (
    <LocalUnconfigured endpoint={window.location.href} />
  );
};
