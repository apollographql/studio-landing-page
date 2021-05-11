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
          border: '1px solid #7156d9',
          borderRadius: 8,
          padding: 10,
          fontSize: 13,
        }}
      >
        <span
          css={{
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          Apollo Server 404
        </span>
        <p>You can send queries this graph by sending a POST request to:</p>
        <div css={{ paddingTop: '1em', paddingBottom: 0 }}>
          <strong style={{ fontSize: 19, fontFamily: 'monospace' }}>
            {`\`${endpoint}\``}
          </strong>
        </div>
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
        maxWidth: 400,
      }}
    >
      <div css={{ paddingBottom: 8 }}>
        <img src={InfoIcon} alt="info-icon" />
      </div>
      <div>
        To customize this landing page, including supressing these instructions,
        visit the
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
          href="https://www.apollographql.com/docs/apollo-server/getting-started/"
        >
          {` docs about configuring Apollo Server.`}
        </a>
      </div>
      <div css={{ paddingTop: 10 }}>
        Learn more about the Apollo platform:
        <div>
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
            href="https://www.apollographql.com/docs/react/"
          >
            Apollo Client
          </a>{' '}
          and{' '}
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
            href="https://www.apollographql.com/docs/studio/"
          >
            Apollo Studio
          </a>
        </div>
      </div>
    </section>
  </>
);
