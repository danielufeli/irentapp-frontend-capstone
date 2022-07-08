/* eslint-disable */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Aside from '../sidebar/sidebar';
import './houseForm.css';

import { addNewHouse } from '../../features/houses/housesState';

const HouseForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

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
  // const onUserIdChanged = (e) => setUserId(e.target.value);
  const onImageUrlChanged = (e) => setImageUrl(e.target.value);
  const navigate = useNavigate();
  useEffect(() => {
    setUserId(user.id);
  }, []);

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
        navigate('/houses');

      } catch (err) {
       return err;
      }
    }
  };

  return (
    <div className="container container-fluid d-flex flex-column flex-md-row ">
      <Aside />
      <main className="page-content form-v5">
      <div className="form-v5-content">

        <form className="form-detail" >
          <h2>Add a new house</h2>
          <div className="mb-3 form-row">
            <label htmlFor="name" className="form-label">
              Name
              <input
                id="name"
                type="text"
                placeholder="Name"
                class="input-text"
                onChange={onNameChanged}
              />
            </label>
          </div>

          <div className="mb-3 form-row">
            <label htmlFor="city" className="form-label">
              City
              <input
                id="city"
                type="text"
                placeholder="City"
                class="input-text"
                onChange={onCityChanged}
              />
            </label>
          </div>
          <div className="mb-3 form-row">
            <label htmlFor="description" className="form-label">
              Description
              <input
                type="textarea"
                id="description"
                rows="4"
                cols="50"
                placeholder="Description of the house"
                class="input-text"
                onChange={onDescriptionChanged}
              />
            </label>
          </div>
          <div className="mb-3 form-row">
            <label htmlFor="image_url" className="form-label">
              Image
              <input
                id="image_url"
                type="url"
                placeholder="Image url"
                class="input-text"
                onChange={onImageUrlChanged}
              />
            </label>
          </div>
          <div className="mb-3 form-row">
            <label htmlFor="price" className="form-label">
              Price
              <input
                id="price"
                type="number"
                placeholder="Price per month"
                class="input-text"
                onChange={onPriceChanged}
              />
            </label>
          </div>

          <div className="mb-3 form-row">
            <label htmlFor="capacity" className="form-label">
              Capacity
              <input
                id="capacity"
                type="number"
                placeholder="Number of people"
                class="input-text"
                onChange={onCapacityChanged}
              />
            </label>
          </div>

          <div className="mb-3 form-row-last">
            <button type="button" onClick={onSubmitHouse} disabled={!canSave} className="register">
              Add House
            </button>
          </div>
        </form>
</div>
      </main>
    </div>
  );
};
export default HouseForm;
