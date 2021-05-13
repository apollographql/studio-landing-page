import React from 'react';
import BackgroundTexture from '../assets/background-texture.png';

/** @jsxImportSource @emotion/react */

export default ({ children }: { children: React.ReactNode }) => (
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
      overflow: 'hidden',
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
    {
      // the half circle on the bottom of the page
    }
    <div
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
);
