import React from 'react';
import PropTypes from 'prop-types';

const MissionRow = (props) => {
  const { name, description } = props;
  return (
    <tr>
      <th>{name}</th>
      <td>{description}</td>
      <td className="mission button-col">
        <button type="button" className="mission member">
          NOT A MEMBER
        </button>
      </td>
      <td className="mission button-col">
        <button type="button" className="mission join">
          Join Mission
        </button>
      </td>
    </tr>
  );
};
MissionRow.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default MissionRow;
