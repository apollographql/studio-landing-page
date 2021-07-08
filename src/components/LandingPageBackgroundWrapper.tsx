import { css, Global } from '@emotion/react';
import React from 'react';
import BackgroundTexture from '../assets/background-texture.png';
import GlowyPlanet from './GlowyPlanet';
import InfoIcon from '../assets/info-icon.svg';
/** @jsxImportSource @emotion/react */

export default ({
  children,
  showFooter,
}: {
  children: React.ReactNode;
  showFooter: boolean;
}) => (
  <div
    css={{
      fontFamily: '"Source Sans Pro", sans-serif',
      // spin for the apollo logo border
      '@keyframes spin': {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      color: 'white',
      textAlign: 'center',
      alignItems: 'center',
      overflow: 'auto',
      height: '100%',
      width: '100%',
      // the stars in the background
      backgroundImage: `url(${BackgroundTexture}), linear-gradient(to bottom, #1c153c 27%, #2d1f66)`,
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundSize: '2184px 996px, 100% 100%',
      backgroundPosition: 'top center, top center',
    }}
  >
    {children}
    {showFooter && (
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
        This page can be customized or hidden. Learn more in the
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
          href="https://www.apollographql.com/docs/apollo-server/api/plugin/landing-pages/"
        >
          Apollo Server Docs
        </a>
      </section>
    )}
    <GlowyPlanet />
  </div>
);
