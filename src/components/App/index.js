import React from "react"
import './App.css';
import Footer from "../Footer";
import GridRow from "../GridRow";
import Header from "../Header";
import GameResult from "../GameResult";
import RestartButton from "../RestartButton";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      currentPlayer: "X",
      gameActive: true,
      displayMessage: ""
    }
  }

  winningMessage = () => `Player ${this.state.currentPlayer} has won!`;

  drawMessage = () => `Game ended in a draw`;

  handleRestart = () => {

    const copiedGameState = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];

    this.setState({
      gameState: copiedGameState,
      currentPlayer: "X",
      gameActive: true,
      displayMessage: ""

    });

  }

  handleResultValidation = () => {
    const winningConditions = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ];

    let roundWon = false;
    //Check for each winning condition
    for (let i = 0; i < winningConditions.length; i++) {

      const condition = winningConditions[i];

      let x = condition[0];
      let y = condition[1];
      let z = condition[2];

      let a = this.state.gameState[x[0]][x[1]];
      let b = this.state.gameState[y[0]][y[1]];
      let c = this.state.gameState[z[0]][z[1]];


      if (a === "" || b === "" || c === "") {
        continue;
      }

      if (a === b && b === c) {
        roundWon = true;
        break;
      }

    }

    if (roundWon) {
      this.setState({
        displayMessage: this.winningMessage(),
        gameActive: false
      })

      return;
    }

    //Handle Draw Condition

    let firstRow = this.state.gameState[0];
    let secondRow = this.state.gameState[1];
    let thirdRow = this.state.gameState[2];

    let roundDraw = !(firstRow.includes("") || secondRow.includes("") || thirdRow.includes(""));

    if (roundDraw) {
      this.setState({
        displayMessage: this.drawMessage(),
        gameActive: false
      })

      return;
    }

  }

  handleClick = (rowIndex, colIndex) => {

    if (this.state.gameState[rowIndex][colIndex] !== "" || !(this.state.gameActive)) {
      return;
    }



    // In React we never mutate values by reference
    // Make a copy
    const copiedGameState = [...this.state.gameState];
    // Make changes
    copiedGameState[rowIndex][colIndex] = this.state.currentPlayer;

    this.setState({
      // Assign copy as state value
      gameState: copiedGameState,
      currentPlayer: this.state.currentPlayer === "X" ? "O" : "X",
    });

    this.handleResultValidation();
  }


  render() {
    // console.log(this.state.gameState);
    return (
      <div className="container">
        <Header />
        <div id="board">
          {this.state.gameState.map((row, rowIndex) => (
            <GridRow row={row} rowIndex={rowIndex}
              handleClick={this.handleClick} key={rowIndex} />
          ))}
        </div>
        <Footer currentPlayer={this.state.currentPlayer} />
        <RestartButton handleRestart={this.handleRestart} />
        <GameResult displayMessage={this.state.displayMessage} />
      </div>
    );
  }
}

export default App;
