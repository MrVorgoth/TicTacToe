import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateGameTurn, updateGameState, updateGamePoints } from '../actions';
import { X, O } from '../constants';

class GameField extends Component {
  constructor(props) {
    super(props);
  }

  markField(e) {
    if (e.currentTarget.textContent != '') {
      console.log('Field already marked');
      return;
    }

    let gameState = this.props.gameState;
    gameState[this.props.boxNumber - 1] = this.props.gameTurn;
    this.props.updateGameState(gameState);

    (this.props.gameTurn == X)
      ? this.props.updateGameTurn(O)
      : this.props.updateGameTurn(X);

    this.checkForWinner(X);
    this.checkForWinner(O);
    this.resetIfBoardFull();
  }

  resetIfBoardFull() {
    let emptyField = _.findIndex(this.props.gameState, function(element) {
      return element == '';
    });
    if (emptyField == -1) {
      let gamePoints = [...this.props.gamePoints];
        this.props.updateGamePoints(gamePoints);
        this.props.updateGameState(['', '', '', '', '', '', '', '', '']);
        this.props.updateGameTurn(X);
    }
  }

  checkForWinner(playerMark) {
    if (this.props.gameState[0] == playerMark && this.props.gameState[1] == playerMark && this.props.gameState[2] == playerMark
      || this.props.gameState[3] == playerMark && this.props.gameState[4] == playerMark && this.props.gameState[5] == playerMark
      || this.props.gameState[6] == playerMark && this.props.gameState[7] == playerMark && this.props.gameState[8] == playerMark
      || this.props.gameState[0] == playerMark && this.props.gameState[3] == playerMark && this.props.gameState[6] == playerMark
      || this.props.gameState[1] == playerMark && this.props.gameState[4] == playerMark && this.props.gameState[7] == playerMark
      || this.props.gameState[2] == playerMark && this.props.gameState[5] == playerMark && this.props.gameState[8] == playerMark
      || this.props.gameState[0] == playerMark && this.props.gameState[4] == playerMark && this.props.gameState[8] == playerMark
      || this.props.gameState[2] == playerMark && this.props.gameState[4] == playerMark && this.props.gameState[6] == playerMark) {
        let index = (playerMark == X) ? 0 : 1;
        let gamePoints = [...this.props.gamePoints];
        gamePoints[index] += 1;
        this.props.updateGamePoints(gamePoints);
        this.props.updateGameState(['', '', '', '', '', '', '', '', '']);
        this.props.updateGameTurn(X);
      }
  }

  render() {
    return (
      <td className="field" onClick={this.markField.bind(this)}>
        {this.props.gameState[this.props.boxNumber - 1]}
      </td>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameState: state.gameState,
    gameTurn: state.gameTurn,
    gamePoints: state.gamePoints
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateGameTurn, updateGameState, updateGamePoints }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameField);