import { PropTypes } from 'prop-types';

const DisplayAlert = ({ alert: { message, show, status } }) => (
  <>
    {show && (
      <div className={`alert ${status}`} role="alert">
        {message}
      </div>
    )}
  </>
);

DisplayAlert.propTypes = {
  alert: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.bool.isRequired,
      PropTypes.string.isRequired,
    ]),
  ).isRequired,
};

export default DisplayAlert;
