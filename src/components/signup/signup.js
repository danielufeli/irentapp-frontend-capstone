const SignUp = () => (
  <div className="container d-flex align-items-center justify-content-center">
    <div className="w-50">
      <form>
        <h3 className="text-center">Sign Up</h3>
        <div className="mb-3">
          <label htmlFor="name">
            Name
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              id="name"
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
            />
          </label>
        </div>
        <div className="d-grid mw-md-100">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered
          {' '}
          <a href="/sign-in">sign in?</a>
        </p>
      </form>
    </div>
  </div>
);

export default SignUp;
