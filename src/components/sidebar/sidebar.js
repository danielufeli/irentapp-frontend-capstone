import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import mainLogo from '../../images/mainLogo.gif';
import { logout, reset } from '../../features/auth/authSlice';

const Aside = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout(user));
    dispatch(reset());
    window.location = '/';
  };

  return (
    <aside className="navbar navbar-expand-md navbar-light d-flex flex-md-column">
      <a href="https://www.google.com/">
        <img src={mainLogo} alt="logo" width="100" height="140" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
        <ul className="navbar-nav w-100 d-flex flex-md-column text-center text-md-end">
          <li>
            <Link to="/">Houses</Link>
            {/* <a className="nav-link" aria-current="page" href="https://www.google.com/">Houses</a> */}
          </li>
          <li>
            <Link to="/reservations">My Reservations</Link>
            {/* <a className="nav-link" href="https://www.google.com/">My Reservations</a> */}
          </li>
          <li>
            <Link to="/addreservation">Add Reservation</Link>
            {/* <a className="nav-link" href="https://www.google.com/">Add Reservations</a> */}
          </li>
          <li>
            <button type="submit" onClick={onLogout}>Log Out</button>
            {/* <a className="nav-link" href="https://www.google.com/">Log out</a> */}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
