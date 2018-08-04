import { GAME_UPDATED } from '../actions';

export default function(state = ['', '', '', '', '', '', '', '', ''], action) {
  switch(action.type) {
    case GAME_UPDATED:
      return action.payload;
  }

  return state;
}