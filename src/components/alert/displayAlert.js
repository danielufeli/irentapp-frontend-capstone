import { PropTypes } from 'prop-types';

const DisplayAlert = ({ alert: { message, status, show } }) => (
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
      PropTypes.bool,
      PropTypes.string,
    ])
  ),
};

export default DisplayAlert;
