import { configureStore } from '@reduxjs/toolkit';
import housesReducer from '../features/houses/housesState';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    houseList: housesReducer,
    auth: authReducer,
  },
});

export default store;
