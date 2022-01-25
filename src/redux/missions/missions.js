export const FETCH = 'missions/FETCH';
export const LOAD = 'missions/LOAD';
export const ERROR = 'missions/ERROR';
export const JOIN = 'missions/JOIN';

const initialState = {
  missions: [],
  loading: false,
  error: '',
};

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};
export const fetchMissions = () => (dispatch) => {
  dispatch({ type: LOAD });
  return fetch('https://api.spacexdata.com/v3/missions', requestOptions)
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCH, data }))
    .catch((error) => dispatch({ type: ERROR, error }));
};

export const joinMissions = (id) => ({
  type: JOIN,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH: {
      return {
        ...state,
        missions: [...action.data],
        loading: false,
      };
    }
    case LOAD: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case JOIN: {
      const newMission = state.missions.map((mission) => {
        if (mission.mission_id !== action.id) return mission;
        // console.log(mission);
        return { ...mission, reserved: true };
      });
      return {
        ...state,
        newMission,
      };
    }
    default:
      return state;
  }
};
export default reducer;
