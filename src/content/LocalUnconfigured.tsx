/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { localRedirectCookie } from '../App';
import ApolloIcon from '../assets/ApolloIcon';
import InfoIcon from '../assets/info-icon.svg';

export default ({
  endpoint,
  baseUrl,
}: {
  endpoint: string;
  baseUrl: string;
}) => (
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
          width: '140px',
          height: '140px',
          marginTop: 30,
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
            width: 500,
          }}
        >
          <h1
            css={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: 8,
            }}
          >
            Ready to explore your graph?
          </h1>
          <p css={{ lineHeight: '24px', maxWidth: '350px', margin: '0 auto' }}>
            Get a free private query console and schema-generated docs for your
            graph in Apollo Studio.
          </p>
        </div>
        <a
          css={{
            fontWeight: 600,
            textDecoration: 'none',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#3f20ba',
              boxShadow:
                '0 0 0 1px rgba(18, 21, 26, 0.2), 0 5px 10px 0 rgba(18, 21, 26, 0.12), 0 1px 0 0 rgba(18, 21, 26, 0.05)',
              cursor: 'pointer',
            },
            padding: '13px 34px',
            borderRadius: 4,
            backgroundColor: '#7156d9',
            color: '#ffffff',
            boxShadow:
              '0px 1px 4px rgba(18, 21, 26, 0.04), inset 0px -1px 0px rgba(18, 21, 26, 0.05), inset 0px 0px 0px 1px rgba(18, 21, 26, 0.2)',
            fontSize: 19,
            transition: 'background-color 0.2s ease-in-out',
            marginTop: 28,
            marginBottom: 24,
          }}
          href={`${baseUrl}/sandbox?endpoint=${encodeURIComponent(endpoint)}`}
        >
          Query your server
        </a>

        <div css={{ fontSize: 13 }}>
          <input
            type="checkbox"
            id="preference"
            onChange={(event) => {
              if (event.target.checked) {
                document.cookie = `${localRedirectCookie}=true`;
              } else {
                document.cookie = `${localRedirectCookie}=false`;
              }
            }}
            css={{
              opacity: 0,
              position: 'relative',
              marginLeft: '-16px',
              // this is a hack for showing our own styled check box
              // https://css-tricks.com/the-checkbox-hack/#custom-designed-radio-buttons-and-checkboxes
              '&:checked + .preference-label:before': {
                background:
                  '#7156d9 url(\'data:image/svg+xml;utf8,<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8126 1.30032L4.48772 8L1.10602 4.40626" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>\') center center no-repeat',
              },
            }}
          />
          <label
            css={{
              cursor: 'pointer',
              paddingLeft: 24,
              position: 'relative',
              color: '#d9cfff',
              // this is a hack for showing our own styled check box
              // https://css-tricks.com/the-checkbox-hack/#custom-designed-radio-buttons-and-checkboxes
              '&:before': {
                content: `${'" "'}`,
                position: 'absolute',
                left: 0,
                top: 0,
                width: 14,
                height: 14,
                border: '1px solid #ad9bf6',
                borderRadius: 4,
              },
            }}
            className="preference-label"
            htmlFor="preference"
          >
            Automatically redirect to Studio next time
          </label>
        </div>

        <div
          css={{
            borderTop: '1px solid #7256D9',
            marginTop: 40,
            width: 400,
            color: '#D9CFFF',
            fontSize: 15,
          }}
        >
          <p>Or, query this graph directly:</p>
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
