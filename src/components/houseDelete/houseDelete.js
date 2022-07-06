import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses, deleteHouse } from '../../features/houses/housesState';
import Aside from '../sidebar/sidebar';

function HouseDelete() {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses.houses);

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  return (
    <div className="container d-flex flex-column flex-md-row">
      <Aside />
      <main className="ps-0 ps-md-5 flex-grow-1 pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="carousel slide multi-item-carousel"
                id="theCarousel"
              >
                <div className="carousel-inner">
                  {houses.map((item) => (
                    <div className="col-md-4 mb-3 item" key={item.id}>
                      <div className="card" id={item.id}>
                        <img
                          className="img-fluid"
                          src={item.image_url}
                          alt={item.name}
                        />
                        <div className="card-body">
                          <h2 className="card-title">{item.name}</h2>
                          <p className="card-text">
                            City:
                            {item.city}
                          </p>

                          <p>
                            <Link to={`${item.id}`}>More details</Link>
                          </p>
                          <p>
                            {' '}
                            <button
                              type="button"
                              onClick={() => dispatch(deleteHouse(parseInt(item.id, 10)))}
                            >
                              Delete
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HouseDelete;
