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
          {missions.loading && (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
          {missions.missions.map((mission) => (
            <MissionRow
              name={mission.mission_name}
              description={mission.description}
              key={mission.mission_id}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
