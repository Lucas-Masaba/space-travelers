import React from 'react';
import PropTypes from 'prop-types';

const Rockets = (props) => {
  const { rockets } = props;
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
            <p>{rocket.rocket_type}</p>
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
      id: PropTypes.string.isRequired,
      rocket_name: PropTypes.string.isRequired,
      rocket_description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
