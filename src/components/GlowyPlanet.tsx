/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const GlowyPlanet = () => {
  const glowPixelsGrown = 160;
  const glowPixelsBlurred = 20;
  const planetVisibleHeight = 140;
  return (
    <div
      css={css`
        width: 100%;
        height: ${glowPixelsGrown + glowPixelsBlurred + planetVisibleHeight}px;
        overflow: hidden;
        position: absolute;
        bottom: 0;
      `}
    >
      <div
        css={css`
          border-radius: 1750px;
          width: 3500px;
          height: 3500px;
          box-shadow: 0 -32px ${glowPixelsGrown}px ${glowPixelsBlurred}px rgba(113, 86, 217, 0.5);
          margin-top: ${glowPixelsGrown + glowPixelsBlurred}px;
          margin-left: 50%;
          transform: translateX(-50%);
          background-color: #2d1f66;
        `}
      />
    </div>
  );
};

export default GlowyPlanet;
