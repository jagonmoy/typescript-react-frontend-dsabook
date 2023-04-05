import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { testStore } from '../testSetup';

test('<App />', () => {
  render(<Provider store={testStore} > <App /></Provider>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
