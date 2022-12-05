import { createSlice } from '@reduxjs/toolkit';

const fullSet = createSlice({
  name: 'fullSet',
  initialState: {
    completeSet: {
      shirt: '',
      pants: '',
      shoe: '',
    },
    successSets: 0,
    progressCounter: 0,
  },
  reducers: {
    addShirt(state, action) {
      if (state.completeSet.shirt === '') {
        state.progressCounter += 0.3333;
      }
      state.completeSet.shirt = action.payload;
    },
    addPants(state, action) {
      if (state.completeSet.pants === '') {
        state.progressCounter += 0.3333;
      }
      state.completeSet.pants = action.payload;
    },
    addShoe(state, action) {
      if (state.completeSet.shoe === '') {
        state.progressCounter += 0.3333;
      }
      state.completeSet.shoe = action.payload;
    },
    resetProgressCounter(state) {
      state.progressCounter = 0;
    },
    countSuccessSets(state) {
      state.successSets += 1;
    },
  },
});

export const addShirt = fullSet.actions.addShirt;
export const addPants = fullSet.actions.addPants;
export const addShoe = fullSet.actions.addShoe;
export const resetProgressCounter = fullSet.actions.resetProgressCounter;
export const countSuccessSets = fullSet.actions.countSuccessSets;
export default fullSet.reducer;
