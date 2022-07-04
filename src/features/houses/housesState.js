/* eslint-disable */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'http://127.0.0.1:3000/api/v1/houses'

export const getHouses = createAsyncThunk (
'photos/getHouses',
async () => {
const response = await fetch(URL);
const data = await response.json();
return data;
}

);

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
