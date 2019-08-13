import remote from './remote';
import * as actions from '../../../../actions/actionTypes/tetris';




// TO CHANGE
export const startGame = () => dispatch => {
	dispatch({
		type: actions.CLIENT_SET_OPPONENTS,
		board: Array(20).fill(0).map(() => Array(10).fill(0))
	});
	dispatch({
		type: actions.CLIENT_SET_OPPONENTS,
		opponents: [
			{id: '1', spectre: Array(20).fill(0).map(() => Array(10).fill(0))}
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
