import React from 'react';
import { connect } from 'react-redux';

import * as tasksActions from '../tasks.actions';

const Task = ({ text, done, id, updateTask, deleteTask }) => {
  const taskClasses = `list-item ${done && 'list-item_done'}`;

  return (
    <li className={taskClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => updateTask(id)}
      />
      <span className="list-item__text"> {text}</span>
      <button className="list-item__delete-btn" onClick={() => deleteTask(id)}></button>
    </li>
  );
};

const mapDispatch = {
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
};

export default connect(null, mapDispatch)(Task);
