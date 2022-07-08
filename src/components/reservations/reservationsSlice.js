/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const RESERVATIONS_URL = 'https://fast-lowlands-73397.herokuapp.com/api/v1/reservations';

const initialState = {
  reservations: [],
  status: null,
};

const user = JSON.parse(localStorage.getItem('user'));
const config = { headers: { Authorization: user && user.token } };

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
  try {
    const response = await axios.get(RESERVATIONS_URL, config);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addNewReservation = createAsyncThunk('reservations/addNewReservation', async (initialReservation) => {
  try {
    const response = await axios.post(RESERVATIONS_URL, initialReservation, config);
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
  extraReducers: {
    [fetchReservations.fulfilled]: (state, { payload }) => {
      state.reservations = payload;
      state.status = 'success';
    },
    [fetchReservations.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchReservations.rejected]: (state) => {
      state.reservations = [];
      state.status = 'failed';
    },
    [addNewReservation.fulfilled]: (state, action) => {
      state.reservations.unshift(action.payload);
    },
  },
});

export const { reservationAdded } = ReservationsSlice.actions;

export const allReservations = (state) => state.reservations.reservations;

export default ReservationsSlice.reducer;
