/** @jsxImportSource @emotion/react */
import React from 'react';

export default () => (
  <>
    <style>
      {`@keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }`}
    </style>
    <div
      css={{
        padding: 0,
        margin: 0,
        overflow: 'auto',
        height: '100%',
        width: '100%',
      }}
    >
      <div
        className="page-content"
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 40px',
          color: 'white',
          textAlign: 'center',
          overflow: 'hidden',
          position: 'relative',
          minHeight: '100%',
          backgroundImage:
            'url(https://cdn.glitch.com/f8bd7045-3ef9-406e-bec2-60ab295d8e27%2Fconstellation-bg%402x.png?v=1608237779584), linear-gradient(to bottom, #1c153c 27%, #2d1f66)',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundSize: '2184px 996px, 100% 100%',
          backgroundPosition: 'top center, top center',
        }}
      >
        <section
          className="apollo-logo"
          css={{
            flex: 'none',
            margin: '0 auto',
            width: '140px',
            height: '140px',
          }}
        >
          <svg
            width="140px"
            height="140px"
            viewBox="0 0 240 240"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g transform="translate(20.000000, 20.000000)" fillRule="nonzero">
              <polygon
                fill="white"
                points="112.4 48.7 88.2 48.7 53.2 139.6 75.1 139.6 80.8 124.2 113.9 124.2 107.9 107.2 86.1 107.2 100.3 68.1 125.5 139.6 147.4 139.6"
              />
              <path
                style={{
                  transformOrigin: '100px 100px',
                  animation: 'spin 6s linear infinite',
                }}
                id="logo-spin"
                fill="white"
                d="M196.3,73 C196.2,72.7 196.2,72.4 196,72.1 C196,72 195.9,71.8 195.9,71.8 C195.1,70.1 193.4,68.9 191.4,68.9 C188.6,68.9 186.4,71.1 186.4,73.9 C186.4,74.5 186.5,75 186.7,75.5 L186.7,75.5 C188.9,83.4 190,91.6 190,100 C190,124 180.6,146.6 163.6,163.6 C146.6,180.6 124,190 100,190 C76,190 53.4,180.6 36.4,163.6 C19.4,146.6 10,124 10,100 C10,76 19.4,53.4 36.4,36.4 C53.4,19.4 76,10 100,10 C121.5,10 141.8,17.5 158,31.2 C157.5,32.6 157.2,34.1 157.2,35.7 C157.2,42.5 162.7,47.9 169.4,47.9 C176.2,47.9 181.6,42.4 181.6,35.7 C181.6,29 176.1,23.5 169.4,23.5 C167.9,23.5 166.5,23.8 165.2,24.2 C147.7,9.1 124.9,0 100,0 C44.8,0 0,44.8 0,100 C0,155.2 44.8,200 100,200 C155.2,200 200,155.2 200,100 C200,90.7 198.7,81.6 196.3,73 Z"
              />
            </g>
            <rect fill="transparent" x="0" y="0" width="240" height="240" />
          </svg>
        </section>

        <section
          className="main-content"
          css={{
            margin: '40px auto 90px',
            maxWidth: '80%',
          }}
        >
          <div
            className="intro-paragraph boxthing"
            css={{
              color: '#d9cfff',
              border: '1px solid #7156d9',
              borderRadius: 8,
              padding: 10,
              flex: 'none',
              fontSize: 13,
              position: 'relative',
              zIndex: 2,
              width: 450,
            }}
          >
            <span
              className="headline"
              css={{
                fontSize: '138%',
                fontWeight: 'bold',
                marginBottom: '1em',
              }}
            >
              Welcome to Apollo Server.
            </span>
            <p>
              Click the button below for a private query console for this graph.
            </p>
            <p>You can send queries this graph by sending a POST request to:</p>
            <p>
              <strong style={{ fontSize: '138%', fontFamily: 'monospace' }}>
                `localhost:4000`
              </strong>
            </p>
            <p>
              To customize this landing page, including supressing these
              instructions, visit the
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
                href=""
              >
                {` docs about configuring Apollo Server.`}
              </a>
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
              margin: '40px auto 30px',
              border: 'none',
              borderRadius: 4,
              backgroundColor: '#7156d9',
              color: '#ffffff',
              boxShadow:
                '0px 1px 4px rgba(18, 21, 26, 0.04), inset 0px -1px 0px rgba(18, 21, 26, 0.05), inset 0px 0px 0px 1px rgba(18, 21, 26, 0.2)',
              fontSize: 19,
              transition: 'background-color 0.1s ease-in-out',
              display: 'inline-block',
            }}
            href="https://studio.apollographql.com/dev"
            className="studio-button"
          >
            Query this server now on Apollo Studio
          </a>

          <div className="save-preference-line" style={{ fontSize: 13 }}>
            <input
              type="checkbox"
              id="preference"
              css={{
                opacity: 0,
                '&:checked': {
                  background:
                    '#7156d9 url(\'data:image/svg+xml;utf8,<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8126 1.30032L4.48772 8L1.10602 4.40626" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>\') center center no-repeat',
                },
              }}
              className="preference-input"
            />
            <label
              css={{
                cursor: 'pointer',
                paddingLeft: 24,
                position: 'relative',
                color: '#d9cfff',
                '&:before': {
                  // content: " ",
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: 16,
                  height: 16,
                  border: '1px solid #ad9bf6',
                  borderRadius: 4,
                },
              }}
              htmlFor="preference"
              className="preference-label"
            >
              Automatically redirect this browser to{' '}
              <span id="window-location">
                https://studio.apollographql.com/dev
              </span>
            </label>
          </div>
        </section>

        <section
          className="boxthing noborder"
          css={{
            color: '#d9cfff',
            border: '1px solid #7156d9',
            borderRadius: '8px',
            padding: 10,
            margin: '8em auto -30px',
            flex: 'none',
            fontSize: 13,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <svg
            className="question-icon"
            css={{
              marginRight: 8,
              display: 'inline-block',
              verticalAlign: 'middle',
            }}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 6.99994C7 5.89528 7.896 4.99994 9.00067 5.00061C10.1053 5.00061 11.0007 5.89661 11 7.00128C11 7.84861 10.4653 8.60394 9.66667 8.88661C9.26667 9.02794 9 9.40594 9 9.82994V10.5006"
              stroke="#AD9BF6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.00001 12.5C8.86201 12.5 8.75001 12.612 8.75001 12.75C8.75001 12.888 8.86201 13 9.00001 13C9.13801 13 9.25001 12.888 9.25001 12.75C9.25001 12.612 9.13801 12.5 9.00001 12.5V12.5"
              stroke="#AD9BF6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 1C13.4181 1 17 4.58187 17 9C17 13.4181 13.4181 17 9 17C4.58187 17 1 13.4181 1 9C1 4.58187 4.58187 1 9 1Z"
              stroke="#AD9BF6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <br />
          <br />
          Learn more in the{' '}
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
            href="https://www.apollographql.com/docs/apollo-server/"
          >
            Apollo Server Docs
          </a>
          <br />
          <br />
          <span className="copy">
            Check out the other pillars of the Apollo platform:
            <br />
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
          </span>
        </section>
        <div
          className="planet"
          css={{
            borderRadius: 1750,
            width: 3500,
            height: 3500,
            top: 'calc(100% - 140px)',
            boxShadow: '0 -32px 160px 20px rgba(113, 86, 217, 0.72)',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#2d1f66',
          }}
        />
      </div>
    </div>
  </>
);
