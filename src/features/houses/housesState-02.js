/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const HOUSES_URL = 'http://127.0.0.1:3000/api/v1/houses';

export const getHouses = createAsyncThunk('houses/getHouses', async () => {
  const response = await axios.get(HOUSES_URL);
  return response.data;
});

export const addNewHouse = createAsyncThunk(
  'houses/addNewHouse',
  async (obj) => {
    const response = await axios.post(HOUSES_URL, obj);
    return response.data;
  },
);

export const deleteHouse = createAsyncThunk(
  'houses/deleteHouse',
  async (initialHouse) => {
    const id = initialHouse;
    try {
      const response = await axios.delete(`${HOUSES_URL}/${id}`);
      if (response?.status === 200) return initialHouse;
      return `${response?.status}: ${response?.statusText}`;
    } catch (err) {
      return err.message;
    }
  },
);

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};



const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {
    // omit existing reducers here
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getHouses.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getHouses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(getHouses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewHouse.fulfilled, (state, action) => {
        // We can directly add the new post object to our posts array
        state.houses.push(action.payload);
      })
      .addCase(deleteHouse.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Failed to delete');
        }
        const { id } = action.payload;
        const houses = state.houses.filter((house) => house.id !== id);
        state.houses = houses;
      });
  },
});

export const { houseAdded } = housesSlice.actions;

export const selectAllHouses = (state) => state.houses.houses;

export const selectHouseById = (state, houseId) => state.houses.houses.find((house) => house.id === houseId);

export default housesSlice.reducer;
