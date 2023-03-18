import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchDogBreedImage, fetchBreedImageStatus, breedImage } from '../../store/dogs/dogs.slice';
import { Link, useParams } from 'react-router-dom';
import { InterfaceDogInfo } from '../../types/dogs';
import { Box, Grid, Alert, AlertTitle, CircularProgress, Typography } from '@mui/material';

export function Dog() {
  const dispatch = useAppDispatch();
  let { breed, subBreed = '' } = useParams();
  const dogBreedImageData = useAppSelector(breedImage);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const status = useAppSelector(fetchBreedImageStatus);

  useEffect(() => {
    const abortController = new AbortController();
    const dogInfo = {
      breed,
      subBreed,
      signal: abortController.signal,
    } as InterfaceDogInfo;
    dispatch(fetchDogBreedImage(dogInfo));
    return () => abortController.abort();
  }, [dispatch, breed, subBreed]);

  if (status === 'loading') {
    return (
      <Box py={2} sx={{ textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  } else if (status === 'failed' || (dogBreedImageData && dogBreedImageData.status !== 'success')) {
    return (
      <Box py={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          There was an error fetching data. Please try again later...
        </Alert>
      </Box>
    );
  }

  return (
    <Grid container spacing={2} mt={1}>
      <Grid item xs={12} pt={3}>
        <Link to={'/'}>Back To List</Link>
      </Grid>
      <Grid item xs={12} sx={{ textTransform: 'capitalize' }}>
        <Typography variant={'h5'}>Dog Name - {`${breed} ${subBreed}`}</Typography>
      </Grid>
      <Grid item xs={12}>
        {dogBreedImageData && (
          <>
            {!isImageLoaded && <CircularProgress />}
            <img src={dogBreedImageData.message} height={300} onLoad={() => setIsImageLoaded(true)} alt={breed} />
          </>
        )}
      </Grid>
    </Grid>
  );
}
