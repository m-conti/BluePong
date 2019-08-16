import remote from './remote';
import * as actions from '../../../../actions/actionTypes/tetris';




// TO CHANGE
export const startGame = () => dispatch => {
	const init_board = Array(20).fill(0).map(() => Array(10).fill(0));
	init_board[19][4] = 1;
	init_board[19][5] = 1;
	init_board[19][6] = 1;
	init_board[19][7] = 1;
	init_board[18][6] = 2;
	init_board[18][7] = 2;
	init_board[17][6] = 2;
	init_board[17][7] = 2;
	dispatch({
		type: actions.CLIENT_UPDATE_BOARD,
		board: init_board, 

	});
	dispatch({
		type: actions.CLIENT_SET_OPPONENTS,
		opponents: [
			{id: '1', spectre: Array(20).fill(0).map(() => Array(10).fill(0))},
			{id: '2', spectre: Array(20).fill(0).map(() => Array(10).fill(0))}
		]
	});
};


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
