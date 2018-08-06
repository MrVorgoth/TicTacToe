import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameField from '../containers/game-field';

class GameBoard extends Component {
  constructor(props) {
    super(props);
  }

  renderBoard() {
    let count = 0;
    let board = _.times(3, () => {
      return(
        <tr key={count}>
          {_.times(3, () => {
            count++;
            return <GameField key={count} boxNumber={count} />;
          })}
        </tr>
      );
    });
    return board;
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.renderBoard()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gamePoints: state.gamePoints
  };
}

export default connect(mapStateToProps)(GameBoard);