/** @jsxImportSource @emotion/react */
import React from 'react';
import CLIQueryInstructions from '../components/CLIQueryInstructions';

export default ({ endpoint }: { endpoint: string }) => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
      width: '100%',
    }}
  >
    <section
      css={{
        // make sure the text appears above the semicircle
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        marginRight: 20,
        marginLeft: 20,
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
