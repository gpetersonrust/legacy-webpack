 import '../scss/app.scss'; // Import SCSS
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use React 18 API
import App from '../../components/App';

// Get root element
const rootElement = document.getElementById('roots');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  alert('Root element not found');
}
 