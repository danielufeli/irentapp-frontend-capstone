import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectHouseById } from '../../features/houses/housesState';
import Modal from '../modal/Modal';
// import reservationPopUp from '../reservations/reservationPopUp';

import Aside from '../sidebar/sidebar';

function HouseDetails() {
  const { houseId } = useParams();
  const [showpopup, setShowpopup] = useState(false);

  const house = useSelector((state) => selectHouseById(state, Number(houseId)));
  // console.log(house);

  // Here I will define a function to render a popup for reserving a house
  console.log(showpopup);
  // <reservationPopUp />;
  return (
    <div className="container d-flex flex-column flex-md-row">
      <Aside />
      <main className="ps-0 ps-md-5 flex-grow-1 p-3">
        <div className="card">
          <div>
            <h2>
              House
              {house.name}
            </h2>
          </div>
          <div>
            <img src={house.image_url} alt={house.name} className="img-fluid" />
          </div>

          <div className="card-body">
            <p className="card-text">
              Price:
              {house.price}
              {' '}
              per month
            </p>
            <p className="card-text">
              description:
              {house.description}
            </p>
            <p className="card-text">
              city:
              {house.city}
            </p>
            <p className="card-text">
              capacity:
              {house.capacity}
            </p>
          </div>
          <button className="btn btn-primary" type="button" onClick={() => setShowpopup(true)}>Add reservation</button>
          <button className="btn btn-primary" type="button">Delete House</button>
        </div>
        { showpopup && <Modal />}
      </main>
    </div>
  );
}

export default HouseDetails;
