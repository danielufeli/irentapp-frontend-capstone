import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from '../components/reservations/reservationsSlice';
// import housesReducer from '../components/reservations/houseSlice';
import usersReducer from '../components/reservations/usersSlice';
import housesReducer from '../features/houses/housesState';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    reservations: reservationsReducer,
    houses: housesReducer,
    users: usersReducer,
  },
});

export default store;
