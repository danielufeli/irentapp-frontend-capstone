import { Link } from 'react-router-dom';

const Login = () => (
  <>
    <section className="login_bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h1 className="text-center">Welcome!</h1>
                <h5 className="card-title text-center mb-5 fs-5">Kindly Enter your Details to Login</h5>
                <form>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your E-mail"
                      name="email"
                    />

                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your Password"
                      name="password"
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
                    <Link to="/houses" className="btn btn-outline-dark btn-login text-uppercase fw-bold">
                      Sign in
                    </Link>
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

export default Login;
