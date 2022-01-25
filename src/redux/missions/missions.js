export const FETCH = 'missions/FETCH';

const initialState = [];

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};
export const fetchMissions = () => (dispatch) => {
  dispatch({ type: LOAD });
  return fetch('https://api.spacexdata.com/v3/missions', requestOptions)
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCH, data }));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH: {
      return [...action.data];
    }
    default:
      return state;
  }
};
export default reducer;
