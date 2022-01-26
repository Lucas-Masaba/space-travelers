import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleJoin } from '../redux/missions/missions';

const MissionRow = (props) => {
  const {
    name, id, description, joined,
  } = props;
  const dispatch = useDispatch();
  const join = () => {
    dispatch(toggleJoin(id));
  };
  return (
    <tr>
      <th>{name}</th>
      <td>{description}</td>
      <td className="button-col">
        <button type="button" className={`member ${joined}`}>
          {joined ? 'Active Member' : 'NOT A MEMBER'}
        </button>
      </td>
      <td className="button-col">
        <button
          type="button"
          name="join"
          className={`join ${joined}`}
          onClick={join}
        >
          {joined ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

MissionRow.defaultProps = {
  joined: false,
};
MissionRow.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool,
};

export default MissionRow;
