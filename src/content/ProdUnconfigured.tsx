/** @jsxImportSource @emotion/react */
import React from 'react';
import ApolloIcon from '../assets/ApolloIcon';
import InfoIcon from '../assets/info-icon.svg';

export default ({ endpoint }: { endpoint: string }) => (
  <>
    <section
      css={{
        width: '140px',
        height: '140px',
        marginTop: 60,
        marginBottom: 20,
      }}
    >
      {ApolloIcon}
    </section>

    <section
      css={{
        // make sure the text appears above the  semicircle
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        css={{
          color: '#d9cfff',
          fontSize: 15,
          width: 520,
        }}
      >
        <h1
          css={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#ffffff',
          }}
        >
          Apollo Server 404
        </h1>
        <p css={{ lineHeight: '24px', fontSize: 15 }}>
          You can send queries this graph by sending a POST request to:
        </p>
        <p>
          <span
            css={{
              fontFamily: 'monospace',
              fontSize: 18,
              backgroundColor: 'rgba(15,7,56,0.7)',
              padding: '8px 16px',
              borderRadius: 4,
              marginLeft: 8,
              marginTop: 8,
              color: '#ffffff',
            }}
          >
            {endpoint}
          </span>
        </p>
      </div>
    </section>

    <section
      css={{
        color: '#d9cfff',
        border: '1px solid #7156d9',
        borderRadius: '8px',
        padding: 10,
        flex: 'none',
        fontSize: 13,
        margin: 10,
        // make sure the text appears above the  semicircle
        zIndex: 2,
        maxWidth: 500,
        marginTop: 'auto',
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
      You can customize (or hide) this page. Learn more in the{' '}
      <a
        css={{
          fontWeight: 600,
          textDecoration: 'none',
          color: '#41d9d3',
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
        href="https://www.apollographql.com/docs/apollo-server/getting-started"
      >
        Apollo Server Docs
      </a>
    </section>
  </>
);
