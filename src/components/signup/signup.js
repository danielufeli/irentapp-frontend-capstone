import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';
import DisplayAlert from '../alert/displayAlert';
import styles from './signup.module.css';

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
    <div className={styles.formbody}>
      <section className={styles.signup}>
        <div className={styles.signupContent}>
          <form onSubmit={onSubmit} className="signup-form">
            <h2 className={styles.formTitle}>Sign Up</h2>
            <DisplayAlert alert={alert} />
            <div className={styles.SignupFormGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Name

                <input
                  type="text"
                  placeholder="Enter your name"
                  className={styles.formInput}
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                  required
                />

              </label>
            </div>
            <div className={styles.SignupFormGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email address

                <input
                  type="email"
                  placeholder="Enter email"
                  className={styles.formInput}
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </label>
            </div>
            <div className={styles.SignupFormGroup}>
              <label htmlFor="password" className="{styles.formLabel}">
                Password
                <input
                  type="password"
                  placeholder="Enter password"
                  className={styles.formInput}
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
              </label>
            </div>
            <div className={styles.SignupFormGroup}>
              <label htmlFor="ConfirmPassword" className={styles.formLabel}>
                Password
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className={styles.formInput}
                  id="confirmPassword"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={onChange}
                  required
                />
              </label>
            </div>
            <div className={styles.SignupFormGroup}>
              <button type="submit" className={styles.formSubmitButton}>
                Sign Up
              </button>
            </div>
            <p>
              Already registered
              {' '}
              <Link to="/">sign in?</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
