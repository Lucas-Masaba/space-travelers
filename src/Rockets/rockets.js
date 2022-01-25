import { fetchRocketsFromAPI } from '../rocketsAPI/rocketsAPIhandler';

// constants
const FETCH_ROCKETS = 'rocketsStore/rockets/FETCH_ROCKETS';

// actions
export const fetchRockets = () => async (dispatch) => {
  const data = await fetchRocketsFromAPI();
  const rockets = [];
  data.forEach((item) => {
    const rocket = {
      id: item.id,
      rocket_name: item.rocket_name,
      rocket_type: item.rocket_type,
      flickr_images: item.flickr_images[0],
      description: item.description,
    };
    rockets.push(rocket);
  });

  dispatch({
    type: FETCH_ROCKETS,
    payload: rockets,
  });
};

// reducers
const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;
