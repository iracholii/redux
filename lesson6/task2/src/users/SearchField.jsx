import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

const SearchField = ({ fetchUserData }) => {
  const [userName, setUserName] = useState('');

  const changeHandler = event => {
    setUserName(event.target.value);
  };

  const clickHandler = () => {
    fetchUserData(userName);
  };

  return (
    <div className="name-form">
      <input type="text" className="name-form__input" onChange={changeHandler} value={userName} />
      <button className="name-form__btn btn" onClick={clickHandler}>
        Show
      </button>
    </div>
  );
};

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);

SearchField.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
};
