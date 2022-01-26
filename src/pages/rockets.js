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
            <img className="rocket_images" alt={rocket.rocket_name} src={rocket.flickr_images} />
          </div>
          <div className="rocket_paragraph_container">
            <h3>{rocket.rocket_name}</h3>
            <p>{rocket.description}</p>
            <p>{`Type: ${rocket.rocket_type}`}</p>
            <button onClick={() => reserveRocketsProps(rocket.id)} className="rocket_reserve" type="button">Reserve Rocket</button>
          </div>
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
