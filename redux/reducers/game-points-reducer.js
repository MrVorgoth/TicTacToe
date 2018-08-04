import { GAME_POINTS } from '../actions';

export default function(state = [0, 0], action) {
  switch(action.type) {
    case GAME_POINTS:
      return action.payload;
  }

  return state;
}