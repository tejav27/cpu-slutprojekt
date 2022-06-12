import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
  .then(() =>
  console.log('Service worker is registered.***********')
  )
  .catch(error =>
  console.log('Error with register service worker.', error)
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

