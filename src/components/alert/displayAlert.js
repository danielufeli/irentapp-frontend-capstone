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
  alert: PropTypes.objectOf(PropTypes.string, PropTypes.boolean).isRequired,
};

export default DisplayAlert;
