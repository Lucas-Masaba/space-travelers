import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import MissionRow from '../components/mission-row';
import '../components/spinner.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  return (
    <section className="missions">
      <table>
        <thead>
          <tr className="missions header">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.missions.map((mission) => (
            <MissionRow
              name={mission.mission_name}
              id={mission.mission_id}
              description={mission.description}
              joined={mission.reserved}
              key={mission.mission_id}
            />
          ))}
        </tbody>
      </table>
      {missions.loading && (
        <div className="spin-b4">
          <h2 style={{ textAlign: 'center' }}>
            <div className="spin" />
          </h2>
        </div>
      )}
      {missions.error && (
        <h3>{missions.error}</h3>
      )}
    </section>
  );
};

export default Missions;
