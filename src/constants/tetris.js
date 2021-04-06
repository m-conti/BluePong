export const MAX_PLAYERS = 2;
export const MAX_VIEWERS = 4;

export const ARROW_LEFT = 'ArrowLeft';
export const ARROW_RIGHT = 'ArrowRight';
export const ARROW_UP = 'ArrowUp';
export const ARROW_DOWN = 'ArrowDown';
export const SPACE_KEY = ' ';
export const Z_KEY = 'z';
export const X_KEY = 'x';
export const P_KEY = 'p';

export const RIGHT = 'RIGHT';
export const LEFT = 'LEFT';
export const DOWN = 'DOWN';

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;
export const BOARD = () => new Array(BOARD_HEIGHT).fill(0).map(() => new Array(BOARD_WIDTH).fill(0));

export const TILE_EMPTY_VALUE = 0;
export const TILE_I_VALUE = 1;
export const TILE_O_VALUE = 2;
export const TILE_T_VALUE = 3;
export const TILE_J_VALUE = 4;
export const TILE_L_VALUE = 5;
export const TILE_S_VALUE = 6;
export const TILE_Z_VALUE = 7;
export const TILE_BLOCK_VALUE = 8;


export const INITIAL_GRAVITY_TIMEOUT = 500;