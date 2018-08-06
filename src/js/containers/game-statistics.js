import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateGameTurn, updateGameState } from '../actions';
import { X, O } from '../constants';

class GameStatistics extends Component {
  constructor(props) {
    super(props);

    this.playerClass = 'player-container__mark-x';
  }

  render() {
    (this.props.gameTurn == X)
      ? this.playerClass = 'player-container__mark-x'
      : this.playerClass = 'player-container__mark-y';
    return (
      <div className="player-container">
        <p className="player-container__turn"><span className={this.playerClass}>{this.props.gameTurn}</span> turn</p>
        <h4>Wygrane <span className="player-container__mark-x">X</span> {this.props.gamePoints[0]}</h4>
        <h4>Wygrane <span className="player-container__mark-y">O</span> {this.props.gamePoints[1]}</h4>
      </div>
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
  return bindActionCreators({ updateGameTurn, updateGameState }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameStatistics);