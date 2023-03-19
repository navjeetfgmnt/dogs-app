import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { memo } from 'react';

export const DogBreedImageGrid = memo(function ({ images }: { images: string[] }) {
  return (
    <ImageList cols={3} sx={{ height: 'calc(100vh - 125px)' }}>
      {images.map(image => (
        <ImageListItem key={image}>
          <img src={image} alt={image} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
});
