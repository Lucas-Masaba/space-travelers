import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import MissionRow from '../components/mission-row';
import './missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  return (
    <section className="missions">
      <table className="missions header">
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {missions.map((mission) => (
          <MissionRow
            name={mission.mission_name}
            description={mission.description}
            key={mission.mission_id}
          />
        ))}
      </table>
    </section>
  );
};

export default Missions;
