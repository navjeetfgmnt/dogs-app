import { ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export function DogSubBreeds({ subBreeds, handleClick }: { subBreeds: string[]; handleClick: (breed: string) => {} }) {
  return (
    <>
      {subBreeds.map(subBreed => (
        <ListItemButton sx={{ pl: 5, opacity: 0.8 }} key={subBreed} onClick={() => handleClick(subBreed)}>
          <FiberManualRecordIcon sx={{ fontSize: 8, marginRight: '10px' }} />
          <ListItemText primary={subBreed} />
        </ListItemButton>
      ))}
    </>
  );
}
