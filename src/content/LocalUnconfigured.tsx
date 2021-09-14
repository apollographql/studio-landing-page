/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-no-target-blank */
/** @jsxImportSource @emotion/react */
import React from 'react';
import { localRedirectCookie } from '../App';
import ApolloIcon from '../assets/ApolloIcon';
import CLIQueryInstructions from '../components/CLIQueryInstructions';

export default ({
  endpoint,
  isEmbedded,
  studioLink,
}: {
  endpoint: string;
  isEmbedded: boolean;
  studioLink: string;
}) => (
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
        width: '100%',
        marginRight: 20,
        marginLeft: 20,
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
        // if the page is embedded, b/c folks are using Codesandbox to submit a bug report, for example
        // we want to open Studio Sandbox in a new tab since Studio doesn't allow embedding
        target={isEmbedded ? '_blank' : '_self'}
        rel={isEmbedded ? 'noreferrer' : 'apollo-server'}
        href={studioLink}
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
        {!isEmbedded && (
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
        )}
      </div>
      <div
        css={{
          borderTop: '1px solid #7256D9',
          marginTop: 40,
          minWidth: 400,
          color: '#D9CFFF',
          fontSize: 15,
        }}
      >
        <p>Or, query this graph directly:</p>
        <CLIQueryInstructions endpoint={endpoint} />
      </div>
    </section>
  </div>
);
