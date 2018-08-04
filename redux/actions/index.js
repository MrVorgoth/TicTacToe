export const GAME_UPDATED = 'GAME_UPDATED';
export const GAME_TURN = 'GAME_TURN';
export const GAME_POINTS = 'GAME_WINNER';

export function updateGameState(gameState) {
  return {
    type: GAME_UPDATED,
    payload: gameState
  };
}

export function updateGameTurn(gameTurn) {
  return {
    type: GAME_TURN,
    payload: gameTurn
  };
}

export function updateGamePoints(gamePoints) {
  return {
    type: GAME_POINTS,
    payload: gamePoints
  };
}