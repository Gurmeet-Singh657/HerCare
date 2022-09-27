import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {SearchProvider} from './context/SearchContext';
import { LatLonProvider } from './context/LatLonContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <LatLonProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
      </LatLonProvider>
  </React.StrictMode>
);

