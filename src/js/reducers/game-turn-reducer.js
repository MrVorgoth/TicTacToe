import { GAME_TURN } from '../actions';

export default function(state = 'X', action) {
  switch(action.type) {
    case GAME_TURN:
      return action.payload;
  }

  return state;
}