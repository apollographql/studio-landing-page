/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { prodRedirectCookie } from '../App';
import InfoIcon from '../assets/info-icon.svg';
import CLIQueryInstructions from '../components/CLIQueryInstructions';

export default ({
  endpoint,
  graphRef,
  baseUrl,
}: {
  endpoint: string;
  graphRef: string;
  baseUrl: string;
}) => {
  const atIndex = graphRef.indexOf('@');
  const graphName = graphRef.substring(
    0,
    atIndex !== -1 ? atIndex : graphRef.length,
  );
  return (
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
              minWidth: 400,
              color: '#D9CFFF',
              fontSize: 15,
            }}
          >
            <p>Send a POST request to query {graphName}:</p>
            <CLIQueryInstructions endpoint={endpoint} />
          </div>
          <p>
            You can also{' '}
            <a
              css={css`
                color: #ffffff;
              `}
              href={`${baseUrl}/graph/${graphRef}/explorer`}
            >
              query {graphName} from Apollo Studio
            </a>
          </p>

          <div style={{ fontSize: 13 }}>
            <input
              type="checkbox"
              id="preference"
              onChange={(event) => {
                if (event.target.checked) {
                  document.cookie = `${prodRedirectCookie}=true`;
                } else {
                  document.cookie = `${prodRedirectCookie}=false`;
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
};
