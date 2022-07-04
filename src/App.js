import './App.css';
import { Routes, Route } from 'react-router-dom';
import Houses from './components/houses/houses';
import MyReservations from './components/reservations/MyReservations';
import AddReservation from './components/reservations/AddReservation';
import Login from './components/login/login';
import SignUp from './components/signup/signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/houses" element={<Houses />} />
        <Route path="/reservations" element={<MyReservations />} />
        <Route path="/addreservation" element={<AddReservation />} />
      </Routes>
    </div>
  );
}

export default App;
