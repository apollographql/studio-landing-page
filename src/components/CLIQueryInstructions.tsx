/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const CLIQueryInstructions = ({ endpoint }: { endpoint: string }) => (
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
      margin-right: 20px;
      margin-left: 20px;

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
    <pre css={{ margin: 0, whiteSpace: 'pre-wrap' }}>
      {[
        `curl --request POST \\`,
        `  --header 'content-type: application/json' \\`,
        `  --url ${escapeShellArgument(endpoint)} \\`,
        `  --data '${JSON.stringify({
          query: 'query { __typename }',
        })}'`,
      ].join('\n')}
    </pre>
  </div>
);

export default CLIQueryInstructions;

// Mostly from https://github.com/xxorax/node-shell-escape/blob/ebdb90e58050d74dbda9b8177f7de11cbb355d94/shell-escape.js#L4-L17
function escapeShellArgument(argument: string) {
  if (!/[^A-Za-z0-9_/:=-]/.test(argument)) {
    return argument;
  }
  const escapedArgument = `'${argument.replace(/'/g, "'\\''")}'`;
  return escapedArgument
    .replace(/^(?:'')+/g, '') // unduplicate single-quote at the beginning
    .replace(/\\'''/g, "\\'"); // remove non-escaped single-quote if there are enclosed between 2 escaped
}
