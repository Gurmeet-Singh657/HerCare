import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchProvider } from './context/SearchContext';
import { ChakraProvider, theme } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </SearchProvider>
  </React.StrictMode>
);

