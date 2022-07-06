import './App.css';
import { Routes, Route } from 'react-router-dom';
import Houses from './components/houses/houses';
import MyReservations from './components/reservations/MyReservations';
import AddReservation from './components/reservations/AddReservation';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import HouseForm from './components/houseForm/houseForm';
import HouseDetails from './components/houseDetails/houseDetails';
import HouseDelete from './components/houseDelete/houseDelete';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/houses" element={<Houses />} />
        <Route path="/reservations" element={<MyReservations />} />
        <Route path="/addreservation" element={<AddReservation />} />
        <Route path="/addHouse" element={<HouseForm />} />
        <Route path="houses/:houseId" element={<HouseDetails />} />
        <Route path="delete" element={<HouseDelete />} />
      </Routes>
    </div>
  );
}

export default App;
