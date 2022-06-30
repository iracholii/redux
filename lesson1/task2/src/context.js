import React from 'react';

const UserContext = React.createContext({
  name: '',
  avatar_url: '',
});

export default UserContext;
