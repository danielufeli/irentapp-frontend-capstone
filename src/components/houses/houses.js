/* eslint-disable */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHouses } from "../../features/houses/housesState";
import Aside from "../sidebar/sidebar";

function Houses() {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houseList.items);

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);


  return (
    <div className="container d-flex flex-column flex-md-row">
      <Aside />
      <main className="ps-0 ps-md-5 flex-grow-1 pt-3">

        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="carousel slide multi-item-carousel" id="theCarousel">
                <div class="carousel-inner">
                  {houses.map((item) => (
                    <div className="col-md-4 mb-3 item">
                      <div className="card" id={item.id}>
                        <img
                          className="img-fluid"
                          src={item.image_url}
                          alt={item.name}
                        />
                        <div className="card-body">
                          <h4 className="card-title">{item.name}</h4>
                          <p className="card-text">{item.price} per month</p>
                          <button>More details</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  class="left carousel-control"
                  href="#theCarousel"
                  data-slide="prev"
                >
                  <i class="glyphicon glyphicon-chevron-left"></i>
                </a>
                <a
                  class="right carousel-control"
                  href="#theCarousel"
                  data-slide="next"
                >
                  <i class="glyphicon glyphicon-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Houses;
