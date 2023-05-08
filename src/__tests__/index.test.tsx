import React from 'react';
import { render } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '../App';
import { setupStore } from '../app/store';

describe('App', () => {
  it('renders without crashing', () => {
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);
  
    const root = createRoot(rootElement);
  
    render(
      <Provider store={setupStore()}>
        <App />
      </Provider>,
      { container: rootElement }
    );
  
    // Assert any necessary expectations here
    // For example, you can check if a specific element is present or its text content
  });
});
