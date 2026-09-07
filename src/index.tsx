import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// React 18 removed ReactDOM.render in favour of createRoot. `#react-root` is
// the div the Apollo Server landing page plugin emits, so if it's missing
// there is nothing to render into and failing loudly beats a blank page.
const container = document.getElementById('react-root');
if (!container) {
  throw new Error(
    'Expected a #react-root element to render the landing page into',
  );
}

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
