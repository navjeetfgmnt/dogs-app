import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchDogsData, fetchBreedImage } from '../../services/dogs.service';
import { InterfaceDogs, InterfaceBreedImage, InterfaceDogInfo } from '../../types/dogs';

export interface DogsState {
  data: InterfaceDogs | null;
  status: 'idle' | 'loading' | 'failed';
  breed: {
    data: InterfaceBreedImage | null;
    status: 'idle' | 'loading' | 'failed';
  };
}

const initialState: DogsState = {
  data: null,
  status: 'idle',
  breed: {
    data: null,
    status: 'idle',
  },
};

export const fetchDogs = createAsyncThunk('dogs/fetchDogsData', async () => await fetchDogsData());

export const fetchDogBreedImage = createAsyncThunk(
  'dogs/fetchDogBreedImage',
  async (dogInfo: InterfaceDogInfo) => await fetchBreedImage(dogInfo),
);

export const dogsSlice = createSlice({
  name: 'dogBreeds',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDogs.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchDogs.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchDogs.rejected, state => {
        state.status = 'failed';
      })
      .addCase(fetchDogBreedImage.pending, state => {
        state.breed.status = 'loading';
      })
      .addCase(fetchDogBreedImage.fulfilled, (state, action) => {
        state.breed.status = 'idle';
        state.breed.data = action.payload;
      })
      .addCase(fetchDogBreedImage.rejected, state => {
        state.breed.status = 'failed';
      });
  },
});
export const selectDogs = (state: RootState) => state.dogs.data;
export const fetchDogsStatus = (state: RootState) => state.dogs.status;
export const breedImage = (state: RootState) => state.dogs.breed.data;
export const fetchBreedImageStatus = (state: RootState) => state.dogs.breed.status;
export default dogsSlice.reducer;
