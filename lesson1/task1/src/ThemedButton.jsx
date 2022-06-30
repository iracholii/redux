import React from 'react';
import { ThemeContext } from './themes-context';

class ThemedButton extends React.Component {
  render() {
    return (
      <button
        className="btn"
        {...this.props}
        style={{ backgroundColor: this.context.background, color: this.context.fontColor }}
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
