/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-no-target-blank */
/** @jsxImportSource @emotion/react */
import React from 'react';
import { prodRedirectCookie } from '../App';
import CLIQueryInstructions from '../components/CLIQueryInstructions';

export default ({
  endpoint,
  graphRef,
  isEmbedded,
  studioLink,
}: {
  endpoint: string;
  graphRef: string;
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
          minWidth: 400,
          color: '#D9CFFF',
          fontSize: 15,
        }}
      >
        <p>Send a POST request to query this endpoint:</p>
        <CLIQueryInstructions endpoint={endpoint} />
      </div>
      <p>
        You can also{' '}
        <a
          css={{ color: '#ffffff' }}
          // if the page is embedded, b/c folks are using Codesandbox to submit a bug report, for example
          // we want to open Studio Sandbox in a new tab since Studio doesn't allow embedding
          target={isEmbedded ? '_blank' : '_self'}
          href={studioLink}
          rel={isEmbedded ? 'noreferrer' : 'apollo-server'}
        >
          query this endpoint from Apollo Studio
        </a>
        .
      </p>

      <div style={{ fontSize: 13 }}>
        <input
          type="checkbox"
          id="preference"
          onChange={(event) => {
            if (event.target.checked) {
              document.cookie = `${prodRedirectCookie(graphRef)}=true`;
            } else {
              document.cookie = `${prodRedirectCookie(graphRef)}=false`;
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
              lineHeight: '24px',
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
    </section>
  </div>
);
