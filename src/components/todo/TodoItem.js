import React from 'react';

export const TodoItem = props => {
  const toggle = props.handleToggle.bind(null,props.id);
  return (
    <li>
      <input type="checkbox" onChange={toggle} checked={props.isComplete}/>{props.name}
    </li>
  );
};

TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired,
};
