import React, { Component } from 'react';
import "./RestartButton.css";

class RestartButton extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

      <button onClick={this.props.handleRestart}>
        Restart
      </button>

    );
  }
}

export default RestartButton;