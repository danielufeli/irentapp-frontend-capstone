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

          <p>
            <Link to="/delete" className="btn btn-primary">Delete House</Link>
          </p>
          <button className="btn btn-primary" type="button" onClick={() => setShowpopup(true)}>Add reservation</button>

        </div>
        { showpopup && <Modal />}
      </main>
    </div>
  );
}

export default HouseDetails;
