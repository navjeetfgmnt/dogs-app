import { configureStore } from '@reduxjs/toolkit';
import dogsReducer from '../store/dogs/dogs.slice';

export const store = configureStore({
  reducer: {
    dogs: dogsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
