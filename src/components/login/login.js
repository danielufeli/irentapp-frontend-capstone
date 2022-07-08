import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import DisplayAlert from '../alert/displayAlert';
import { login } from '../../features/auth/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    user, isLoading, isError, isSuccess, message,
  } = useSelector((state) => state.auth);

  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
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

  const { email, password } = userInput;

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ user: { email, password } }));
  };

  return (
    <>
      <section className="login_bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <h1 className="text-center">Welcome!</h1>
                  <h5 className="card-title text-center mb-5 fs-5">Kindly Enter your Details to Login</h5>
                  <br />
                  <DisplayAlert alert={alert} />
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your E-mail"
                        name="email"
                        onChange={onChange}
                        value={email}
                      />

                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your Password"
                        onChange={onChange}
                        name="password"
                        value={password}
                      />
                    </div>

                    <div className="form-check mb-3">
                      <label className="form-check-label" htmlFor="rememberPasswordCheck">
                        Remember password
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="rememberPasswordCheck"
                        />
                      </label>
                    </div>
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-outline-dark btn-login text-uppercase fw-bold"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Loading' : 'Sign in'}
                      </button>
                    </div>
                    <hr className="my-4" />
                    <div className="d-grid mb-2">
                      <Link to="/signup" className="btn btn-warning btn-login text-uppercase fw-bold">
                        Sign Up
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
