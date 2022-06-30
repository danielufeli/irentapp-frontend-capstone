import mainLogo from '../../images/mainLogo.gif';

const Aside = () => (
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
          <a className="nav-link" aria-current="page" href="https://www.google.com/">Houses</a>
        </li>
        <li>
          <a className="nav-link" href="https://www.google.com/">My Reservations</a>
        </li>
        <li>
          <a className="nav-link" href="https://www.google.com/">Add Reservations</a>
        </li>
        <li>
          <a className="nav-link" href="https://www.google.com/">Log out</a>
        </li>
      </ul>
    </div>
  </aside>

);

export default Aside;
