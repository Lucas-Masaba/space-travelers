import { React } from 'react';
import './rockets.css';
import PropTypes from 'prop-types';

const Rockets = (props) => {
  const { rockets, reserveRocketsProps } = props;
  return (
    // <div>
    //   <p>Development in progress</p>
    // </div>
    <ul className="rockets_ul">
      {rockets.map((rocket) => (
        <li className="rocket_item" key={rocket.id}>
          <div className="rocket_image_container">
            <img
              className="rocket_images"
              alt={rocket.rocket_name}
              src={rocket.flickr_images}
            />
          </div>
          <div className="rocket_paragraph_container">
            <h3>{rocket.rocket_name}</h3>
            {rocket.reserved === true && (
              <span className="reserve_span">
                Reserved
                {' '}
              </span>
            )}
            <span>{rocket.description}</span>
            <p>{`Type: ${rocket.rocket_type}`}</p>
            <button
              onClick={() => reserveRocketsProps(rocket.id)}
              className={`rocket_reserve ${rocket.reserved}`}
              type="button"
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
          {/* {!rocket.reserved && (
              <button
                onClick={() => reserveRocketsProps(rocket.id)}
                className="rocket_reserve"
                type="button"
              >
                Reserve Rocket
              </button>
            )}
            {rocket.reserved === true && (
              <button
                type="button"
                onClick={() => reserveRocketsProps(rocket.id)}
              >
                Cancel Reservation
              </button>
            )}
            {rocket.reserved === false && (
              <button
                onClick={() => reserveRocketsProps(rocket.id)}
                className="rocket_reserve"
                type="button"
              >
                Reserve Rocket
              </button>
            )} */}
        </li>
      ))}
    </ul>
  );
};
export default Rockets;

Rockets.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  reserveRocketsProps: PropTypes.func.isRequired,
};
