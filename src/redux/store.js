import { configureStore } from '@reduxjs/toolkit';
import housesReducer from '../features/houses/housesState';

const store = configureStore({
  reducer: {
    houseList: housesReducer,
  },
});

export default store;
