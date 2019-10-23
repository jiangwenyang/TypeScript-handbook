import React from 'react';
import PropTypes from 'prop-types';

interface ButtonCountProps extends React.HTMLAttributes<HTMLButtonElement> {
  name?: string;
}

interface ButtonCountState {
  count: number;
}

class ButtonCount extends React.Component<ButtonCountProps, ButtonCountState> {
  static propTypes = {
    name: PropTypes.string
  };
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>Click {this.state.count} times</button>
    );
  }
}

export default ButtonCount;
