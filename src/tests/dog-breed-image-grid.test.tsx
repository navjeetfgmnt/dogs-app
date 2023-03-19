import { render } from '@testing-library/react';
import { DogBreedImageGrid } from '../screens/dogs/components/dogBreedImageGrid';

describe('Dog Breed Images grid', () => {
  const images = [
    'https://images.dog.ceo/breeds/affenpinscher/n02110627_11584.jpg',
    'https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_1943.jpg',
    'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_1349.jpg',
  ];
  test('renders the dog breed images correctly', () => {
    const { getAllByRole } = render(<DogBreedImageGrid images={images} />);
    expect(getAllByRole('img')).toHaveLength(3);
  });
});
