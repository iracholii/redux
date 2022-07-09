import React from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';

const Users = ({ users, addUser, deleteUser }) => {
  const createUserHandler = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`,
    };
    addUser(newUser);
  };

  return (
    <div className="users">
      <button className="users__create-btn" onClick={createUserHandler}>
        Create user
      </button>
      <ul className="users__list">
        {users.map(user => (
          <li key={user.id} className="users__list-item">
            <span>{user.name}</span>
            <button className="users__delete-btn" onClick={() => deleteUser(user.id)}>
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  users: state.users.usersList,
});

const mapDispatch = {
  addUser: userActions.addUser,
  deleteUser: userActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers;
