import Navbar from '../components/Navbar';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('App render', () => {
  test('renders the app content correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(getByText('Dog Breeds')).not.toBeNull();
  });
});
