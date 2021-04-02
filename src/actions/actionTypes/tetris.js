
// actions launched on client side

// viewer
export const CLIENT_REFRESH_GAME = 'CLIENT_REFRESH_GAME'

// player
export const CLIENT_SET_OPPONENTS = 'CLIENT_SET_OPPONENTS';
export const CLIENT_UPDATE_BOARD = 'CLIENT_UPDATE_BOARD';
export const CLIENT_UPDATE_OPPONENT_SPECTRE = 'CLIENT_UPDATE_OPPONENT_SPECTRE';
export const CLIENT_UPDATE_OPPONENT = 'CLIENT_UPDATE_OPPONENT';
export const CLIENT_UPDATE_SCORE = 'CLIENT_UPDATE_SCORE';
export const CLIENT_UPDATE_POWER = 'CLIENT_UPDATE_POWER';
export const CLIENT_UPDATE_NEXT_PIECE = 'CLIENT_UPDATE_NEXT_PIECE';
export const CLIENT_UPDATE_PAUSE = 'CLIENT_UPDATE_PAUSE';
export const CLIENT_GAME_OVER = 'CLIENT_GAME_OVER';
export const CLIENT_MATCH_OVER = 'CLIENT_MATCH_OVER';
export const CLIENT_RESET_STATE = 'CLIENT_RESET_STATE';

// actions launched on server side

// viewer action
export const SERVER_REFRESH_GAME = 'SERVER_REFRESH_GAME';

// game actions
export const SERVER_START_GAME = 'SERVER_START_GAME';
export const SERVER_RESTART_GAME = 'SERVER_RESTART_GAME';
export const SERVER_PAUSE_GAME = 'SERVER_PAUSE_GAME';

// piece actions
export const SERVER_MOVE_PIECE_LEFT = 'SERVER_MOVE_PIECE_LEFT';
export const SERVER_MOVE_PIECE_RIGHT = 'SERVER_MOVE_PIECE_RIGHT';
export const SERVER_MOVE_PIECE_DOWN = 'SERVER_MOVE_PIECE_DOWN';
export const SERVER_ROTATE_PIECE = 'SERVER_ROTATE_PIECE';
export const SERVER_DROP_PIECE = 'SERVER_DROP_PIECE';

// power actions
export const SERVER_NEXT_POWER = 'SERVER_NEXT_POWER';
export const SERVER_PREVIOUS_POWER = 'SERVER_PREVIOUS_POWER';
