import React from 'react';
import Aside from '../sidebar/sidebar';

function MyReservations() {
  return (
    <div className="container d-flex flex-column flex-md-row">
      <Aside />
      <h1>My Reservations</h1>
    </div>
  );
}

export default MyReservations;
