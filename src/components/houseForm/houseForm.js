/* eslint-disable */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Aside from '../sidebar/sidebar';

import { addNewHouse } from '../../features/houses/housesState';

const HouseForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState(0);
  const [city, setCity] = useState('');
  const [user_id, setUserId] = useState(0);
  const [image_url, setImageUrl] = useState('');

  const onNameChanged = (e) => setName(e.target.value);
  const onPriceChanged = (e) => setPrice(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onCapacityChanged = (e) => setCapacity(e.target.value);
  const onCityChanged = (e) => setCity(e.target.value);
  const onUserIdChanged = (e) => setUserId(e.target.value);
  const onImageUrlChanged = (e) => setImageUrl(e.target.value);
  const navigate = useNavigate();

  const canSave = [
    name,
    city,
    price,
    user_id,
    capacity,
    image_url,
    description,
  ].every(Boolean);

  const onSubmitHouse = () => {
    if (canSave) {
      try {
        const obj = {
          name,
          city,
          price,
          user_id,
          capacity,
          image_url,
          description,
        };

        dispatch(addNewHouse(obj));

        setName('');
        setPrice(0);
        setDescription('');
        setCapacity(0);
        setCity('');
        setUserId(0);
        setImageUrl('');
        navigate('/');

      } catch (err) {
       return err;
      }
    }
  };

  return (
    <div className="container d-flex flex-column flex-md-row">
      <Aside />

      <div>
        <h1>Add House</h1>
        <form>
          <div class="mb-3">
            <label htmlFor="name" class="form-label">
              Name
              <input
                id="name"
                type="text"
                placeholder="Name"
                onChange={onNameChanged}
              />
            </label>
          </div>

          <div class="mb-3">
            <label htmlFor="city" class="form-label">
              City
              <input
                id="city"
                type="text"
                placeholder="City"
                onChange={onCityChanged}
              />
            </label>
          </div>
          <div class="mb-3">
            <label htmlFor="description" class="form-label">
              Description
              <input
                type="textarea"
                id="description"
                rows="4"
                cols="50"
                placeholder="Description of the house"
                onChange={onDescriptionChanged}
              />
            </label>
          </div>
          <div class="mb-3">
            <label htmlFor="image_url" class="form-label">
              Image
              <input
                id="image_url"
                type="url"
                placeholder="Image url"
                onChange={onImageUrlChanged}
              />
            </label>
          </div>
          <div class="mb-3">
            <label htmlFor="price" class="form-label">
              Price
              <input
                id="price"
                type="number"
                placeholder="Price per month"
                onChange={onPriceChanged}
              />
            </label>
          </div>

          <div class="mb-3">
            <label htmlFor="capacity" class="form-label">
              Capacity
              <input
                id="capacity"
                type="number"
                placeholder="Number of people"
                onChange={onCapacityChanged}
              />
            </label>
          </div>
          <div class="mb-3">
            <label htmlFor="user_id" class="form-label">
              User Id
              <input
                id="user_id"
                type="number"
                placeholder="user_id"
                onChange={onUserIdChanged}
              />
            </label>
          </div>

          <div>
            <button type="button" onClick={onSubmitHouse} disabled={!canSave} class="btn btn-primary">
              Add House
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default HouseForm;
