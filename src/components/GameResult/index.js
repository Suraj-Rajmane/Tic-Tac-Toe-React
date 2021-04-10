import React, { Component } from 'react';
import "./GameResult.css";

class GameResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gameResult">
        {this.props.displayMessage}
      </div>
    );
  }
}

export default GameResult;
