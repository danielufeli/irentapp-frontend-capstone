/* eslint-disable */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const HOUSES_URL = 'http://127.0.0.1:3000/api/v1/houses';

export const getHouses = createAsyncThunk('houses/getHouses', async () => {
    const response = await axios.get(HOUSES_URL)
    return response.data
})

export const addNewHouse = createAsyncThunk('houses/addNewHouse', async (obj) => {
	const response = await axios.post(HOUSES_URL, obj);
	return response.data;
})

export const housesSlice= createSlice({
  name: 'gallery',
  initialState: {
    items: [],
    isLoading: false
  
  },
  extraReducers:{
  [getHouses.pending]: (state) => {
    state.isLoading = true;
  },
  
  [getHouses.fulfilled]: (state, action) =>{
    state.items = action.payload;
    state.isLoading = false;
  },
  
  [getHouses.rejected]: (state) => {
    state.isLoading = false
  }
  
  }
  
  });
  
  export default housesSlice.reducer
