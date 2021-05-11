/** @jsxImportSource @emotion/react */
import React from 'react';
import LandingPageBackgroundWrapper from './components/LandingPageBackgroundWrapper';
import LocalUnconfigured from './content/LocalUnconfigured';
import ProdConfigured from './content/ProdConfigured';
import ProdUnconfigured from './content/ProdUnconfigured';

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

  const isConfigured = false; // TODO check with glasser what constitutes a configured graph.
  return (
    <LandingPageBackgroundWrapper>
      {!!window.graphRef && isConfigured ? (
        <ProdConfigured
          endpoint={window.location.href}
          graphName={window.graphRef.substring(0, window.graphRef.indexOf('@'))}
          variant={window.graphRef.substring(window.graphRef.indexOf('@') + 1)}
        />
      ) : window.graphRef ? (
        <ProdUnconfigured endpoint={window.location.href} />
      ) : (
        <LocalUnconfigured endpoint={window.location.href} />
      )}
    </LandingPageBackgroundWrapper>
  );
};
