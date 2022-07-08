/* eslint-disable */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const HOUSES_URL = "http://127.0.0.1:3000/api/v1/houses";
<<<<<<< HEAD
let user = JSON.parse(localStorage.getItem('user'))
let config;
if (user !== undefined) {
  config = {
    headers: {
      Authorization: user && user.token

    },
  };
}
=======
const user = JSON.parse(localStorage.getItem('user'))
const config = { headers: { Authorization: user && user.token } };
>>>>>>> develop

export const getHouses = createAsyncThunk("houses/getHouses", async () => {
  const response = await axios.get(HOUSES_URL, config);
  return response.data;
});

export const addNewHouse = createAsyncThunk(
  "houses/addNewHouse",
  async (obj) => {
    const response = await axios.post(HOUSES_URL, obj, config);
    return response.data;
  }
);

export const deleteHouse = createAsyncThunk(
  "houses/deleteHouse",
  async (initialHouse) => {
    const id = initialHouse;
    try {
      const response = await axios.delete(`${HOUSES_URL}/${id}`, config);
      if (response?.status === 200 || 202 || 204) return initialHouse;
      return `${response?.status}: ${response?.statusText}`;
    } catch (err) {
      return err.message;
    }
  }
);

const initialState = {
  houses: [],
  status: "idle",
  error: null,
};

const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    houseAdded: {
      reducer(state, action) {
        state.houses.push(action.payload);
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getHouses.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getHouses.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.houses = action.payload;
      })
      .addCase(getHouses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewHouse.fulfilled, (state, action) => {
        state.houses.push(action.payload);
      })
      .addCase(deleteHouse.fulfilled, (state, action) => {
        const id = action.payload;
        const houses = state.houses.filter((house) => house.id !== id);
        state.houses = houses;
      });
  },
});

export const { houseAdded } = housesSlice.actions;

export const selectAllHouses = (state) => state.houses.houses;
export const getHousesStatus = (state) => state.houses.status;
export const selectHouseById = (state, houseId) =>
  state.houses.houses.find((house) => house.id === houseId);

export default housesSlice.reducer;
