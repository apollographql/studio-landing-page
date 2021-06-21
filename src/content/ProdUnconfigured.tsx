/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import CLIQueryInstructions from '../components/CLIQueryInstructions';

export default ({ endpoint }: { endpoint: string }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
    `}
  >
    <section
      css={{
        // make sure the text appears above the semicircle
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        css={{
          marginTop: 20,
          minWidth: 400,
          color: '#D9CFFF',
          fontSize: 15,
        }}
      >
        <p>Send a POST request to query this endpoint</p>
        <CLIQueryInstructions endpoint={endpoint} />
      </div>
    </section>
  </div>
);
