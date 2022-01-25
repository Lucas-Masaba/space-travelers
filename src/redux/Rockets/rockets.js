import { fetchRocketsFromAPI } from '../../rocketsAPI/rocketsAPIhandler';

// constants
const FETCH_ROCKETS = 'rocketsStore/rockets/FETCH_ROCKETS';
const RESERVE_ROCKETS = 'rocketsStore/rockets/RESERVE_ROCKETS';

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

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKETS,
  payload,
});

// reducers
const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case RESERVE_ROCKETS:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
    default:
      return state;
  }
};

export default rocketsReducer;
