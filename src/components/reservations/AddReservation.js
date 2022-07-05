/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import Aside from '../sidebar/sidebar';
import { reservationAdded } from './reservationsSlice';
import { allHouses } from './houseSlice';
import { allUsers } from './usersSlice';
import './reservation.css';

function AddReservation() {
  const [houseId, setHouseId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [userId, setUserId] = useState(1);

  const houses = useSelector(allHouses);
  const users = useSelector(allUsers);

  useEffect(() => {
    users.forEach((user) => setUserId(user.id));
  }, []);

  // console.log(houseId);

  // console.log(setUserId());

  const dispatch = useDispatch();

  const canReserve = houseId && startDate && endDate;

  function handleSubmit() {
    dispatch(
      reservationAdded({
        id: nanoid(),
        house_id: Number(houseId),
        userId,
        startDate,
        endDate,
      }),
    );
    setStartDate('');
    setEndDate('');
    setHouseId('');
  }

  const houseOptions = houses.map((house) => (
    <option key={house.id} value={house.id}>
      {house.name}
    </option>
  ));

  function handleOnSubmitChange(e) {
    e.preventDefault();
  }

  return (
    <div className="container d-flex flex-column flex-md-row">
      <Aside />
      <main className="ps-0 ps-md-5 flex-grow-1">
        <div className="reservation-container">
          <h1>Add Reservation</h1>
          <form onSubmit={handleOnSubmitChange}>
            <label htmlFor="nameContent">Name: </label>
            <select
              id="nameContent"
              name="nameContent"
              value={houseId}
              onChange={(e) => setHouseId(e.target.value)}
            >
              <option value=""> - Select House - </option>
              {houseOptions}
            </select>

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

            <button
              type="submit"
              disabled={!canReserve}
              onClick={handleSubmit}
            >
              Reserve
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AddReservation;
