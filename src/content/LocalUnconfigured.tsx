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
        marginTop: 80,
        marginBottom: 40,
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
          }}
        >
          Ready to explore your graph?
        </h1>
        <p css={{ lineHeight: '24px' }}>
          Get a private query console for your graph and schema generated docs
          in Apollo Studio. You can also send queries this graph by sending a
          POST request to:
          <span
            css={{
              fontFamily: 'monospace',
              backgroundColor: 'rgba(15,7,56,0.7)',
              padding: '4px 8px',
              borderRadius: 4,
              marginLeft: 8,
            }}
          >
            {endpoint}
          </span>
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
        href={`https://local.apollo.dev?endpoint=${encodeURIComponent(
          endpoint,
        )}`}
      >
        Continue to Studio
      </a>

      <div css={{ fontSize: 13 }}>
        <input
          type="checkbox"
          id="preference"
          onChange={(event) => {
            if (event.target.checked) {
              document.cookie = 'redirect=true';
            } else {
              document.cookie = 'redirect=false';
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
          Save this preference
        </label>
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
