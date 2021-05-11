/** @jsxImportSource @emotion/react */
import React from 'react';
import InfoIcon from '../assets/info-icon.svg';

export default ({
  endpoint,
  graphName,
  variant,
}: {
  endpoint: string;
  graphName: string;
  variant: string | undefined;
}) => (
  <>
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
          {`Welcome to the ${graphName} graph API.`}
        </span>
        <p>
          Click the button below for a private query console for this graph.
        </p>
        <p>You can send queries this graph by sending a POST request to:</p>
        <div css={{ paddingTop: '1em', paddingBottom: 0 }}>
          <strong style={{ fontSize: 19, fontFamily: 'monospace' }}>
            {`\`${endpoint}\``}
          </strong>
        </div>
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
          marginTop: 10,
          marginBottom: 30,
        }}
        href="https://local.apollo.dev"
      >
        Query this server now
      </a>

      <div style={{ fontSize: 13 }}>
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
              width: 16,
              height: 16,
              border: '1px solid #ad9bf6',
              borderRadius: 4,
              marginTop: -2,
            },
          }}
          className="preference-label"
          htmlFor="preference"
        >
          Automatically redirect this browser to{' '}
          <span id="window-location">
            {`https://studio.apollographql.com/${graphName}${
              variant ? `/${variant}` : ''
            }`}
          </span>
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
        maxWidth: 400,
      }}
    >
      <div css={{ paddingBottom: 8 }}>
        <img src={InfoIcon} alt="info-icon" />
      </div>
      <div>
        Check out the{' '}
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
          href={`https://studio.apollographql.com/${graphName}/dev`}
        >
          {`${graphName} developer portal`}
        </a>
        <div css={{ paddingTop: 10 }}>
          <div>Get help:</div>
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
              href="https://studio.apollographql.com/support"
            >
              Contact our support team
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);
