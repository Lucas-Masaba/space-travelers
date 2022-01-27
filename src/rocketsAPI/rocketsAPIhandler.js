const baseURL = 'https://api.spacexdata.com/v3/rockets';

export const fetchRocketsFromAPI = async () => {
  const response = await fetch(`${baseURL}`);
  const getResponse = await response.json();
  return getResponse;
};

export default fetchRocketsFromAPI;
