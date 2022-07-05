import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const RESERVATIONS_URL = 'http://127.0.0.1:3000/api/v1/reservations';

const initialState = {
  reservations: [],
};

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
  try {
    const response = await axios.get(RESERVATIONS_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const ReservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    reservationAdded(state, action) {
      state.reservations.push(action.payload);
    },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchReservations.pending, (state, action) => {
  //       state.status = 'loading';
  //     });
  // },
});

export const { reservationAdded } = ReservationsSlice.actions;

export const allReservations = (state) => state.reservations.reservations;

export default ReservationsSlice.reducer;
