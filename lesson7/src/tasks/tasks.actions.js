import { tasksListSelector } from './tasks.selectors';
import * as tasksGateway from './tasksGateway';

export const TASKS_LIST_RECEIVED = 'TASKS_LIST_RECEIVED';

export const tasksListReceived = tasksList => ({
  type: TASKS_LIST_RECEIVED,
  payload: { tasksList },
});

export const getTasksList = () => dispatch => {
  tasksGateway.fetchTasksList().then(tasksList => dispatch(tasksListReceived(tasksList)));
};

export const createTask = text => dispatch => {
  const newTask = { text, done: false, createdAt: new Date().toISOString() };
  tasksGateway.createTask(newTask).then(() => dispatch(getTasksList()));
};

export const updateTask = taskId => (dispatch, getState) => {
  const state = getState();
  const tasksList = tasksListSelector(state);
  const taskToUpdate = tasksList.find(task => task.id === taskId);
  const updatedTask = {
    ...taskToUpdate,
    done: !taskToUpdate.done,
  };
  tasksGateway.updateTask(taskId, updatedTask).then(() => dispatch(getTasksList()));
};

export const deleteTask = taskId => dispatch => {
  tasksGateway.deleteTask(taskId).then(() => dispatch(getTasksList()));
};
