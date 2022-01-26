import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './profile.css';

const Profile = () => {
  const reserved = useSelector((state) => state.missions).missions.filter(
    (mission) => mission.reserved,
  );
  return (
    <section className="profile">
      <table className="missions">
        <thead>
          <tr>
            <th>
              <h2>Missions</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {reserved.length !== 0 ? (
            reserved.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))
          ) : (
            <th className="not-found">
              See a list of all your joined missions&nbsp;
              <Link to="/missions">here.</Link>
            </th>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default Profile;
