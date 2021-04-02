import remote from './remote';
import * as actions from '../../../../actions/actionTypes/tetris';


// VIEWER

export const refreshGame = (id) => ({
	meta: remote,
	type: actions.SERVER_REFRESH_GAME,
	id: id
});

// PLAYER

export const startGame = () => ({
	meta: remote,
	type: actions.SERVER_START_GAME,
});
export const restartGame = () => ({
	meta: remote,
	type: actions.SERVER_RESTART_GAME,
});

// PIECE
export const moveLeft = () => ({
	meta: remote,
	type: actions.SERVER_MOVE_PIECE_LEFT
});
export const moveRight = () => ({
	meta: remote,
	type: actions.SERVER_MOVE_PIECE_RIGHT
});
export const moveDown = () => ({
	meta: remote,
	type: actions.SERVER_MOVE_PIECE_DOWN
});
export const drop = () => ({
	meta: remote,
	type: actions.SERVER_DROP_PIECE
});
export const rotate = () => ({
	meta: remote,
	type: actions.SERVER_ROTATE_PIECE
});

export const pauseGame = () => ({
	meta: remote,
	type: actions.SERVER_PAUSE_GAME
});

// POWER
export const nextPower = () => ({
	meta: remote,
	type: actions.SERVER_NEXT_POWER
});
export const previousPower = () => ({
	meta: remote,
	type: actions.SERVER_PREVIOUS_POWER
});
