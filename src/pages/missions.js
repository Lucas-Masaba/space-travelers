import React from 'react';
import PropTypes from 'prop-types';
import MissionRow from '../components/mission-row';
import './missions.css';

const Missions = ({ missions }) => (
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
        <tr style={{ alignItems: 'center' }}>
          <td>Loading...</td>
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

export default Missions;

Missions.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      mission_name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Missions.defaultProps = {};
