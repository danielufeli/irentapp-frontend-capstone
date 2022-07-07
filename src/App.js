import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Houses from './components/houses/houses';
import MyReservations from './components/reservations/MyReservations';
import AddReservation from './components/reservations/AddReservation';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import HouseForm from './components/houseForm/houseForm';
import HouseDetails from './components/houseDetails/houseDetails';
import HouseDelete from './components/houseDelete/houseDelete';
import { authuser } from './features/auth/authSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Load JWT from local Storage
    const user = JSON.parse(localStorage.getItem('user'));

    const cookieExists = user !== 'undefined' && user !== null;
    if (cookieExists) {
      const loggedinuser = JSON.parse(localStorage.getItem('user'));
      const authTokenExists = loggedinuser !== 'undefined' && loggedinuser !== null;
      if (authTokenExists) {
        dispatch(authuser(user));
      }
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/houses" element={<Houses />} />
        <Route path="/reservations" element={<MyReservations />} />
        <Route path="/add_reservation" element={<AddReservation />} />
        <Route path="/addHouse" element={<HouseForm />} />
        <Route path="houses/:houseId" element={<HouseDetails />} />
        <Route path="delete" element={<HouseDelete />} />
        {/* <Route path="add_reservation" element={<AddReservation />} /> */}
      </Routes>
    </div>
  );
}

export default App;
