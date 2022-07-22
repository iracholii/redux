import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as tasksActions from '../tasks.actions';
import TasksList from './TasksList';
import CreateTaskInput from './CreateTaskInput';

const TodoList = ({ getTasksList }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput />
        <TasksList />
      </main>
    </>
  );
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
};

export default connect(null, mapDispatch)(TodoList);
