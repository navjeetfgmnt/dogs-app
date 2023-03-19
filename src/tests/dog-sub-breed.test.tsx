import { render } from '@testing-library/react';
import { DogSubBreeds } from '../screens/dogs/components/dogSubBreeds';

describe('Dog Sub-breed list', () => {
  const subBreeds = ['shephard'];
  const handleClick = jest.fn();
  test('renders the dogs sub breed correctly', () => {
    const { getByText } = render(<DogSubBreeds subBreeds={subBreeds} handleClick={handleClick} />);
    expect(getByText('shephard')).not.toBeNull();
  });
});
