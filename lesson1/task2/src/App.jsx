import React from 'react';
import UserContext from './context';
import Header from './Header';

class App extends React.Component {
  state = {
    userData: {
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    },
  };

  render() {
    return (
      <div className="page">
        <UserContext.Provider value={this.state.userData}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
