import React from 'react';
import PropTypes from 'prop-types';

const MissionTr = (props) => {
  const { name, description } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <button type="button">NOT A MEMBER</button>
      </td>
      <td>
        <button type="button">Join Mission</button>
      </td>
    </tr>
  );
};
MissionTr.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default MissionTr;
