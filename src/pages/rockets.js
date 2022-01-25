import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../Rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
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
