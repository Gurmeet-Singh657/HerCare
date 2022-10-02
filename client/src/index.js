import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchProvider } from './context/SearchContext';
import { SafetyTipsProvider } from './context/SafetyTipsContext';
import { LatLonProvider } from './context/LatLonContext';
import { TogglerProvider } from './context/Togglercontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LatLonProvider>
      <TogglerProvider>
        <SafetyTipsProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </SafetyTipsProvider>
      </TogglerProvider>
    </LatLonProvider>
  </React.StrictMode>
);

