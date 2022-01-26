import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

const Profile = () => {
  const reserved = useSelector((state) => state.missions).missions.filter(
    (mission) => mission.reserved,
  );
  console.log(reserved);
  return (
    <section className="profile">
      <table className="missions">
        <thead>
          <th>
            <h2>Missions</h2>
          </th>
        </thead>
        <tbody>
          {reserved.map((mission) => (
            <tr key={mission.mission_id}><td>{mission.mission_name}</td></tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Profile;
