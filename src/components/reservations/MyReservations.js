/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allReservations, fetchReservations } from './reservationsSlice';
import { getHouses } from '../../features/houses/housesState';

// import { allHouses } from './houseSlice';

import Aside from '../sidebar/sidebar';
import './reservation.css';

function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector(allReservations);
  const houses = useSelector((state) => state.houses.houses);

  // const houses = useSelector(allHouses);

  useEffect(() => {
    dispatch(fetchReservations());
    dispatch(getHouses());
  }, [dispatch]);

  // console.log(houses);

  const dataBox = [];
  reservations.map((reservation) => {
    const data = houses.forEach((house) => {
      if (house.id === reservation.house_id) {
        dataBox.push(house);
      }
      return dataBox;
    });
    return data;
  });

  const reservationCards = dataBox.map((house) => (
    <article key={house.id}>
      <div className="img-holder">
        <img src={house.image_url} alt="house-img" />
      </div>
      <div className="info-holder">
        <div className="top-info">
          <h2>{house.name}</h2>
          <b className="color-red">
            <i>
              $
              { house.price * 12 }
            </i>
          </b>
        </div>
        <div className="bottom-info">
          <p>{house.description}</p>
          <p>
            Capacity:
            {house.capacity}
          </p>
        </div>
      </div>
    </article>
  ));

  return (
    <div className="container d-flex flex-column flex-md-row">
      <Aside />
      <main className="ps-0 ps-md-5 flex-grow-1">
        <div className="reservation-container">
          <h1>My Reservations</h1>
          {reservationCards}
        </div>
      </main>
    </div>
  );
}

export default MyReservations;
