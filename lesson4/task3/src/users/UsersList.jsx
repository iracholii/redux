import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as usersListActions from './usersList.actions';

const UsersList = ({ users, currentPage, goPrev, goNext }) => {
  const itemsPerPage = 3;

  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const usersToRender = users.slice(start, end);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage + 1}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />

      <ul className="users">
        {usersToRender.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  users: state.users.usersList,
  currentPage: state.users.currentPage,
});

const mapDispatch = {
  goPrev: usersListActions.goPrev,
  goNext: usersListActions.goNext,
};

const connector = connect(mapState, mapDispatch);
const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
