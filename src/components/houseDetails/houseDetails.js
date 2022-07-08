import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectHouseById } from '../../features/houses/housesState';
import Modal from '../modal/Modal';

import Aside from '../sidebar/sidebar';

function HouseDetails() {
  const { houseId } = useParams();
  const [showpopup, setShowpopup] = useState(false);

  const house = useSelector((state) => selectHouseById(state, Number(houseId)));

  return (
    <div className="container d-flex flex-column flex-md-row">
      <Aside />
      <main className="ps-0 ps-md-5 flex-grow-1 p-3">
        <div className="card details">
          <div>
            <h2>
              {house.name}
            </h2>
          </div>
          <div className="img-hold">
            <img src={house.image_url} alt={house.name} className="img-fluid" />
          </div>

          <div className="card-bod">
            <p className="card-text-money">
              $
              {house.price}
              {' '}
              per month
            </p>
            <p className="card-text">
              {house.description}
            </p>
            <p className="card-text">
              <span>City:</span>
              {house.city}
            </p>
            <p className="card-text">
              <span>Capacity:</span>
              {house.capacity}
            </p>
          </div>

          <div className="btns">
            <Link to="/delete" className="btn btn-danger same-size">Delete House</Link>
            <button className="btn btn-primary same-size" type="button" onClick={() => setShowpopup(true)}>Add reservation</button>
          </div>

        </div>
        { showpopup && <Modal />}
      </main>
    </div>
  );
}

export default HouseDetails;
