import { configureStore } from '@reduxjs/toolkit';
import fullSetRducer from './completeSet';
export const store = configureStore({
  reducer: {
    fullClothingSet: fullSetRducer,
  },
});
