/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import ApolloIcon from '../assets/ApolloIcon';
import InfoIcon from '../assets/info-icon.svg';

export default ({ endpoint }: { endpoint: string }) => (
  <>
    <section
      css={{
        width: '140px',
        height: '140px',
        marginTop: 80,
        marginBottom: 40,
      }}
    >
      {ApolloIcon}
    </section>

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
          color: '#d9cfff',
          fontSize: 15,
          width: 520,
        }}
      >
        <h1
          css={{
            fontSize: 38,
            fontWeight: 'bold',
            color: '#ffffff',
          }}
        >
          Apollo Server 404
        </h1>
      </div>

      <div
        css={{
          borderTop: '1px solid #7256D9',
          marginTop: 20,
          width: 400,
          color: '#D9CFFF',
          fontSize: 15,
        }}
      >
        <p>Query this graph directly:</p>
        <div
          css={css`
            font-family: monospace;
            background-color: rgba(15, 7, 56, 0.7);
            padding: 12px 14px 12px 28px;
            border-radius: 4px;
            font-size: 13px;
            line-height: 18px;
            text-align: left;
            position: relative;

            &:before {
              content: '$';
              position: absolute;
              top: 12px;
              left: 12px;
              color: #7156d9;
              font-size: 16px;
            }
          `}
        >
          <pre css={{ margin: 0 }}>{`curl --request POST \\ `}</pre>
          <pre
            css={{ margin: 0 }}
          >{`  --header 'content-type: application/json' \\ `}</pre>
          <pre css={{ margin: 0 }}>{`  --url 'http://localhost:4000' \\ `}</pre>
          <pre
            css={{ margin: 0 }}
          >{`  --data '{"query":"query { __typename }"}' `}</pre>
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
