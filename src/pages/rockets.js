import { React } from 'react';
import './rockets.css';
import PropTypes from 'prop-types';

const Rockets = (props) => {
  const { rockets, reserveRocketsProps } = props;
  return (
    <div className="roger">
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
              <br />
              <br />
              <button
                onClick={() => reserveRocketsProps(rocket.id)}
                className={`rocket_reserve ${rocket.reserved}`}
                type="button"
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
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
