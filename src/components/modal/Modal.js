/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Modal.css';
import { allUsers } from '../reservations/usersSlice';
import { selectHouseById } from '../../features/houses/housesState';
import { addNewReservation } from '../reservations/reservationsSlice';

export default function Modal() {
  const { houseId } = useParams();
  const house = useSelector((state) => selectHouseById(state, Number(houseId)));

  const users = useSelector(allUsers);

  const dispatch = useDispatch();
  const [houseid, setHouseId] = useState(houseId);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [city, setCity] = useState(house.city);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    users.forEach((user) => setUserId(user.id));
  }, [dispatch]);

  function handleSubmit() {
    dispatch(
      addNewReservation({
        house_id: Number(houseid),
        user_id: userId,
        startDate,
        endDate,
        cost: 1000,
      }),
    );
    setStartDate('');
    setEndDate('');
    setHouseId('');
  }

  function handleOnSubmitChange(e) {
    e.preventDefault();
  }

  return (
    <div className="modal-background">
      <div className="modal-2">
        <form onSubmit={handleOnSubmitChange}>
          <label htmlFor="nameContent">Name: </label>
          <input
            id="nameContent"
            name="nameContent"
            value={house.name}
            onChange={(e) => setHouseId(e.target.value)}
          />

          <label htmlFor="cityContent">City: </label>
          <input
            id="cityContent"
            name="cityContent"
            value={city}
            type="text"
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="startDateContent">Start Date: </label>
          <input
            id="startDateContent"
            name="startDateContent"
            value={startDate}
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          />

          <label htmlFor="endDateContent">End Date: </label>
          <input
            id="endDateContent"
            name="endDateContent"
            value={endDate}
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
          />
          <Link to="/reservations">
            <button
              type="submit"
              onClick={handleSubmit}
            >
              Reserve
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
