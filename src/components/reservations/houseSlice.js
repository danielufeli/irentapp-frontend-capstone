import { createSlice } from '@reduxjs/toolkit';
import houseImage from '../../images/services.jpg';
import houseImage1 from '../../images/services1.jpg';
import houseImage2 from '../../images/services2.jpg';

const initialState = [
  {
    id: 1, name: 'Lake View', image_url: houseImage, price: 320, city: 'Cairo', description: '3 bedroomed house with wall fence, master bedroom is self contained', capacity: 6, user_id: 1,
  },
  {
    id: 2, name: 'Mountain View', image_url: houseImage1, price: 480, city: 'North Carolina', description: '4 bedroomed house with wall fence, master bedroom is self contained', capacity: 8, user_id: 1,
  },
  {
    id: 3, name: 'Valley View', image_url: houseImage2, price: 210, city: 'Lusaka', description: '2 bedroomed house with wall fence, master bedroom is self contained', capacity: 4, user_id: 1,
  },
];

const houseSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {},
});

export const allHouses = (state) => state.houses;

export default houseSlice.reducer;
