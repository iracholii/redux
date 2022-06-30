import React from 'react';
import ThemedButton from './ThemedButton';
import { themes, ThemeContext } from './themes-context';

class App extends React.Component {
  state = {
    theme: themes.ligth,
  };

  toggleThemes = () => {
    const newTheme = this.state.theme === themes.dark ? themes.ligth : themes.dark;
    console.log(newTheme);
    this.setState({ theme: newTheme });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleThemes}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>
        <ThemedButton onClick={this.toggleThemes}>Default Theme</ThemedButton>
      </div>
    );
  }
}

export default App;
