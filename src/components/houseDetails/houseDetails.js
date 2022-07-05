import Aside from '../sidebar/sidebar';

function HouseDetails() {
  return (
    <div className="container d-flex flex-column flex-md-row">
      <Aside />
      <main className="ps-0 ps-md-5 flex-grow-1 pt-3" />
    </div>
  );
}

export default HouseDetails;
