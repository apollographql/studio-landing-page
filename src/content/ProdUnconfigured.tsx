/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import ApolloIcon from '../assets/ApolloIcon';
import InfoIcon from '../assets/info-icon.svg';

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
        <div
          css={{
            marginTop: 20,
            width: 400,
            color: '#D9CFFF',
            fontSize: 15,
          }}
        >
          <p>Send a POST request to query this endpoint</p>
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
            <pre css={{ margin: 0 }}>
              {`  --url '`}
              {endpoint}
              {`' \\ `}
            </pre>
            <pre
              css={{ margin: 0 }}
            >{`  --data '{"query":"query { __typename }"}' `}</pre>
          </div>
        </div>
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
