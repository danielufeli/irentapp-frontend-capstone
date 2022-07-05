import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1, name: 'Jeff', admin: false,
  },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const allUsers = (state) => state.users;

export default userSlice.reducer;
