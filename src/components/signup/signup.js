import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';
import DisplayAlert from '../alert/displayAlert';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    user, isLoading, isError, isSuccess, message,
  } = useSelector((state) => state.auth);
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    admin: false,
  });
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    status: 'alert-primary',
  });

  const showAlert = (message, status = 'alert-primary', seconds = 5000) => {
    setAlert({
      show: true,
      message,
      status,
    });

    setTimeout(() => {
      setAlert({
        show: false,
        message: '',
        status: 'alert-primary',
      });
    }, seconds);
  };

  const onChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isError) {
      showAlert(message, 'alert-danger');
    }
    if (isSuccess || user) {
      window.location = '/houses';
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const {
    name, email, password, passwordConfirmation, admin,
  } = userInput;

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || passwordConfirmation === '') {
      showAlert('Please enter all fields', 'alert-danger');
      return false;
    }
    dispatch(register({
      user: {
        name,
        email,
        password,
        admin,
        password_confirmation: passwordConfirmation,
      },
    }));

    return !isError && setUserInput({
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      admin: false,
    });
  };

  if (isLoading) {
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>;
  }

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="w-50">
        <form onSubmit={onSubmit}>
          <h3 className="text-center">Sign Up</h3>
          <DisplayAlert alert={alert} />
          <div className="mb-3">
            <label htmlFor="name">
              Name
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                id="name"
                name="name"
                value={name}
                onChange={onChange}
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
              Email address
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              Password
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="ConfirmPassword">
              Password
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                id="confirmPassword"
                name="passwordConfirmation"
                value={passwordConfirmation}
                onChange={onChange}
                required
              />
            </label>
          </div>
          <div className="d-grid mw-md-100">
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Loading' : 'Sign Up'}
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered
            {' '}
            <Link to="/">sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
