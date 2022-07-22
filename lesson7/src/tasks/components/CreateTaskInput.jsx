import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as tasksActions from '../tasks.actions';

const CreateTaskInput = ({ createTask }) => {
  const [inputValue, setInputValue] = useState('');

  const changeHandler = event => {
    setInputValue(event.target.value);
  };

  const creatingTaskHandler = () => {
    createTask(inputValue);
    setInputValue('');
  };

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={inputValue}
        onChange={changeHandler}
      />
      <button className="btn create-task__btn" onClick={creatingTaskHandler}>
        Create
      </button>
    </div>
  );
};

const mapDispatch = {
  createTask: tasksActions.createTask,
};

export default connect(null, mapDispatch)(CreateTaskInput);
