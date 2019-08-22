export const MAX_PLAYERS = 2;
export const MAX_VIEWERS = 4;

export const ARROW_LEFT = 'ArrowLeft';
export const ARROW_RIGHT = 'ArrowRight';
export const ARROW_UP = 'ArrowUp';
export const ARROW_DOWN = 'ArrowDown';
export const SPACE_KEY = ' ';

export const RIGHT = 'RIGHT';
export const LEFT = 'LEFT';
export const DOWN = 'DOWN';

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;
export const BOARD = () => new Array(BOARD_HEIGHT).fill(0).map(() => new Array(BOARD_WIDTH).fill(0));
