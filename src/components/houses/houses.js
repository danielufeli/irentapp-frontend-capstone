import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import {
  getHouses,
  selectAllHouses,
  getHousesStatus,
} from "../../features/houses/housesState";
import "react-multi-carousel/lib/styles.css";
import Aside from "../sidebar/sidebar";

function Houses() {
  const dispatch = useDispatch();
  const houses = useSelector(selectAllHouses);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (getHousesStatus === "idle" || "succeeded") {
      dispatch(getHouses());
      if (!user) navigate("/");
    }
  }, [getHousesStatus, dispatch]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container d-flex flex-column flex-md-row">
      <Aside />
      <main className="ps-0 ps-md-5 flex-grow-1 pt-3">
        <div className="container">
          <Carousel responsive={responsive}>
            {houses.map((item) => (
              <div className="col-md-4 mb-3 item" key={item.id}>
                <Link to={`${item.id}`}>
                  <div className="card" id={item.id}>
                    <img
                      className="img-fluid"
                      src={item.image_url}
                      alt={item.name}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{item.name}</h4>
                      <p className="card-text">{item.price} per month</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </main>
    </div>
  );
}

export default Houses;
