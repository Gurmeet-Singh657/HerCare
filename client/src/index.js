import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchProvider } from './context/SearchContext';
import { SafetyTipsProvider } from './context/SafetyTipsContext';
import { LatLonProvider } from './context/LatLonContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LatLonProvider>
      <SafetyTipsProvider>

        <SearchProvider>
          <App />
        </SearchProvider>
      </SafetyTipsProvider>
    </LatLonProvider>
  </React.StrictMode>
);

