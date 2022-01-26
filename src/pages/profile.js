import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './profile.css';

const Profile = () => {
  const reserved = useSelector((state) => state.missions).missions.filter(
    (mission) => mission.reserved,
  );
  const rockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));
  return (
    <div className="profile_container">
      <div>
        <section className="profile">
          <table className="missions">
            <thead>
              <tr>
                <th>
                  <h2>My Missions</h2>
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
      </div>
      <div>
        <section className="profile">
          <table className="missions">
            <thead>
              <tr>
                <th>
                  <h2>My Rockets</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              {rockets.length !== 0 ? (
                rockets.map((rocket) => (
                  <tr key={rocket.id}>
                    <td>{rocket.rocket_name}</td>
                  </tr>
                ))
              ) : (
                <th className="not-found">
                  See a list of all your rockets&nbsp;
                  <Link to="/">here.</Link>
                </th>
              )}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Profile;
