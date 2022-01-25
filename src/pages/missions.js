// import React from 'react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

<<<<<<< HEAD
const Missions = () => {
  const missions = useSelector((state) => state.missions);
  console.log(missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  return <p>test:</p>;
};
=======
const Missions = () => (
  <h1>Under Construction</h1>
);
>>>>>>> 5a86cdc946762484b1c79690beac1b7d399fc1c3

export default Missions;
