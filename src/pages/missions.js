import React from 'react';
import PropTypes from 'prop-types';
import MissionRow from '../components/mission-row';
import './missions.css';
import '../components/spinner.css';

const Missions = (props) => {
  const { missions, loading, error } = props;
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
          {missions.map((mission) => (
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
      {loading && (
        <div className="spin-b4">
          <h2 style={{ textAlign: 'center' }}>
            <div className="spin" />
          </h2>
        </div>
      )}
      {error && <h3>{error}</h3>}
    </section>
  );
};

export default Missions;

Missions.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.instanceOf(Object),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

Missions.defaultProps = {};
