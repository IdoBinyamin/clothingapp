import { createSlice } from '@reduxjs/toolkit';

const fullSet = createSlice({
  name: 'fullSet',
  initialState: {
    completeSet: [],
  },
  reducers: {
    addShirt(state, action) {
      state.completeSet.push(action.payload.id);
    },
    addPants(state, action) {
      state.completeSet.push(action.payload.id);
    },
    addShoe(state, action) {
      state.completeSet.push(action.payload.id);
    },
  },
});

export const addShirt = fullSet.actions.addShirt;
export const addPants = fullSet.actions.addPants;
export const addShoe = fullSet.actions.addShoe;
export default fullSet.reducer;
