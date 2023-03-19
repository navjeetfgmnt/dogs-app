import App from '../App';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('App render', () => {
  test('renders the app content correctly', () => {
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(getByText('Dog Breeds')).not.toBeNull();
  });
});
