import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchDogs, fetchDogsStatus, selectDogs } from '../../store/dogs/dogs.slice';
import { useNavigate } from 'react-router-dom';
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  CircularProgress,
  Box,
  AlertTitle,
  Alert,
} from '@mui/material';
import { DogSubBreeds } from './dogSubBreeds';
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

export function Dogs() {
  const dispatch = useAppDispatch();
  const dogsData = useAppSelector(selectDogs);
  const status = useAppSelector(fetchDogsStatus);
  const navigate = useNavigate();
  const [expandedBreed, setExpandedBreed] = useState('');

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  const directToBreed = useCallback(
    (breed: string, subBreed?: string) => {
      navigate(`/dog-breeds/${breed}${subBreed ? `/${subBreed}` : ''}`);
      return breed;
    },
    [navigate],
  );

  if (status === 'loading') {
    return (
      <Box py={2} sx={{ textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  } else if (status === 'failed' || (dogsData && dogsData.status !== 'success')) {
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
    <List
      sx={{ width: '100%', maxWidth: 300, marginTop: 2 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Dog Breeds
        </ListSubheader>
      }
    >
      {dogsData &&
        Object.keys(dogsData.message).map((breed, index) => (
          <Fragment key={breed}>
            <ListItemButton>
              <span>{`${index + 1}.`}</span>
              <ListItemText
                onClick={() => directToBreed(breed)}
                sx={{ marginLeft: '10px', marginRight: '10px', textTransform: 'capitalize' }}
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
  );
}
