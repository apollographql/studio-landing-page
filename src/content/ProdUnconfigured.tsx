/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import ApolloIcon from '../assets/ApolloIcon';
import InfoIcon from '../assets/info-icon.svg';
import CLIQueryInstructions from '../components/CLIQueryInstructions';

export default ({ endpoint }: { endpoint: string }) => (
  <>
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
        <CLIQueryInstructions endpoint={endpoint} />
      </section>
    </div>

    <section
      css={{
        display: 'flex',
        justifyContent: 'center',
        color: '#d9cfff',
        borderRadius: '8px',
        padding: 10,
        fontSize: 13,
        margin: 10,
        // make sure the text appears above the  semicircle
        zIndex: 2,
        maxWidth: 500,
        marginTop: 100,
        marginBottom: 45,
      }}
    >
      <img
        css={{
          verticalAlign: 'middle',
          marginRight: 6,
        }}
        src={InfoIcon}
        alt="info-icon"
      />{' '}
      This page can be customized or hidden. Learn more in
      <a
        css={{
          marginLeft: '0.4em',
          fontWeight: 600,
          color: '#d9cfff',
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
        href="https://www.apollographql.com/docs/apollo-server/getting-started"
      >
        Apollo Server’s Docs
      </a>
    </section>
  </>
);
