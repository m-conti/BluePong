import * as actionTypes from '../../../actions/actionTypes/tetris';

const moveLeft = () => {
	console.log('going left');
}
const moveRight = () => {
	console.log('going right');
}
const rotate = () => {
	console.log('rotating piece');
}

export default function ( action ) {
	switch ( action.type ) {
		case actionTypes.SERVER_MOVE_PIECE_LEFT:
			moveLeft();
			return;
		case actionTypes.SERVER_MOVE_PIECE_RIGHT:
			moveRight();
			return;
		case actionTypes.SERVER_MOVE_PIECE_DOWN:
			moveDown();
			return;
		case actionTypes.SERVER_ROTATE_PIECE:
			rotate();
			return;

		default:
			return;
	}
}

/*
 * export const SERVER_MOVE_PIECE_LEFT = 'SERVER_MOVE_PIECE_LEFT';
export const SERVER_MOVE_PIECE_RIGHT = 'SERVER_MOVE_PIECE_RIGHT';
export const SERVER_MOVE_PIECE_DOWN = 'SERVER_MOVE_PIECE_DOWN';
export const SERVER_ROTATE_PIECE = 'SERVER_ROTATE_PIECE';
export const SERVER_DROP_PIECE = 'SERVER_DROP_PIECE';
*/
