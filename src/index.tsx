import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import {store} from './app/store'
import { Provider } from 'react-redux';

const rootElement  = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  //<React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>,
  //</React.StrictMode>,
);