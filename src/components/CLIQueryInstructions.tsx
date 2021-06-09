/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const CLIQueryInstructions = ({ endpoint }: { endpoint: string }) => (
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
      <pre css={{ margin: 0, whiteSpace: 'pre-line' }}>
        {[
          `curl --request POST \\`,
          `  --header 'content-type: application/json' \\`,
          `  --url '${endpoint}' \\`,
          `  --data '${JSON.stringify({
            query: 'query { __typename }',
          })}'`,
        ].join('\n')}
      </pre>
    </div>
  </div>
);

export default CLIQueryInstructions;
