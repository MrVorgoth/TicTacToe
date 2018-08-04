import { combineReducers } from 'redux';
import GameStateReducer from './game-state-reducer';
import GameTurnReducer from './game-turn-reducer';
import GamePointsReducer from './game-points-reducer';

const rootReducer = combineReducers({
  gameState: GameStateReducer,
  gameTurn: GameTurnReducer,
  gamePoints: GamePointsReducer
});

export default rootReducer;