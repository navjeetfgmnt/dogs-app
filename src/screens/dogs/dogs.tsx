import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchDogs,
  fetchDogsStatus,
  selectDogs,
  fetchDogRandomImages,
  dogBreedImages,
  fetchDogBreedImagesStatus,
} from '../../store/dogs/dogs.slice';
import { useNavigate } from 'react-router-dom';
import { List, ListItemButton, ListItemText, Box, AlertTitle, Alert, Grid } from '@mui/material';
import { DogSubBreeds } from './components/dogSubBreeds';
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { DogBreedImageGrid } from './components/dogBreedImageGrid';
import { Loader } from '../../components/Loader';

export function Dogs() {
  const dispatch = useAppDispatch();
  const dogsData = useAppSelector(selectDogs);
  const dogBreedImagesData = useAppSelector(dogBreedImages);
  const dogsBreedReqStatus = useAppSelector(fetchDogsStatus);
  const dogsBreedImagesReqStatus = useAppSelector(fetchDogBreedImagesStatus);
  const navigate = useNavigate();
  const [expandedBreed, setExpandedBreed] = useState('');

  useEffect(() => {
    dispatch(fetchDogs());
    dispatch(fetchDogRandomImages());
  }, [dispatch]);

  const directToBreed = useCallback(
    (breed: string, subBreed?: string) => {
      navigate(`/dog-breeds/${breed}${subBreed ? `/${subBreed}` : ''}`);
      return breed;
    },
    [navigate],
  );

  if (dogsBreedReqStatus === 'loading') {
    return <Loader />;
  } else if (dogsBreedReqStatus === 'failed' || (dogsData && dogsData.status !== 'success')) {
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
    <>
      <Grid container spacing={3} mt={0}>
        <Grid item xs={12} md={6}>
          {dogsBreedImagesReqStatus === 'failed' && <Alert severity="error">Error loading Images</Alert>}
          {dogsBreedImagesReqStatus !== 'loading' && dogBreedImagesData && (
            <DogBreedImageGrid images={dogBreedImagesData.message} />
          )}
        </Grid>
        <Grid item xs={12} md={6} sx={{ overflow: 'auto' }}>
          <List
            sx={{ width: '100%', height: 'calc(100vh - 125px)', maxWidth: 400, overflow: 'auto' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {dogsData &&
              Object.keys(dogsData.message).map((breed, index) => (
                <Fragment key={breed}>
                  <ListItemButton divider sx={{ maxWidth: 375 }}>
                    <span>{`${index + 1}.`}</span>
                    <ListItemText
                      onClick={() => directToBreed(breed)}
                      sx={{ paddingLeft: '10px', textTransform: 'capitalize' }}
                      primary={breed}
                    />
                    {dogsData.message[breed].length > 0 && (
                      <>
                        {expandedBreed === breed ? (
                          <ExpandLessIcon onClick={() => setExpandedBreed('')} />
                        ) : (
                          <ExpandMoreIcon onClick={() => setExpandedBreed(breed)} />
                        )}
                      </>
                    )}
                  </ListItemButton>
                  <List component="div" disablePadding>
                    {expandedBreed === breed && (
                      <DogSubBreeds
                        subBreeds={dogsData.message[breed]}
                        handleClick={(subBreed: string) => directToBreed(breed, subBreed)}
                      />
                    )}
                  </List>
                </Fragment>
              ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
}
