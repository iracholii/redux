import React from 'react';
import { connect } from 'react-redux';
import { sortedTasksListSelector } from '../tasks.selectors';
import Task from './Task';

const TasksList = ({ tasks }) => (
  <ul className="list">
    {tasks.map(task => (
      <Task key={task.id} {...task} />
    ))}
  </ul>
);

const mapState = state => ({
  tasks: sortedTasksListSelector(state),
});

export default connect(mapState)(TasksList);
