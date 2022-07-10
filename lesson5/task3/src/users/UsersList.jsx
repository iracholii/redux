import React from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import User from './User';
import { filterTextChange } from './users.actions';
import { filterTextSelector, usersListSelector } from './users.selectors';

const UsersList = ({ users, filterText, onChange }) => (
  <div>
    <Filter filterText={filterText} count={users.length} onChange={onChange} />

    <ul className="users">
      {users.map(user => (
        <User key={user.id} {...user} />
      ))}
    </ul>
  </div>
);

const mapState = state => ({
  users: usersListSelector(state),
  filterText: filterTextSelector(state),
});

const mapDispatch = {
  onChange: filterTextChange,
};

export default connect(mapState, mapDispatch)(UsersList);
