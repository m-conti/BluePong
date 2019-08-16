import * as actionTypes from '../../../actions/actionTypes/tetris';
import * as actions from '../client/game';

const moveLeft = ( {meta} ) => {
	const newBoard = Array(20).fill(0).map(() => Array(10).fill(0));
	newBoard[0][0] = 1;
	newBoard[1][0] = 1;
	newBoard[0][1] = 1;
	newBoard[1][1] = 1;

	meta.player.socket.emit('action', actions.updateBoard(newBoard));
}
const moveRight = ( {meta} ) => {
	const newBoard = Array(20).fill(0).map(() => Array(10).fill(0));
	newBoard[0][9] = 1;
	newBoard[1][9] = 1;
	newBoard[0][8] = 1;
	newBoard[1][8] = 1;

	meta.player.socket.emit('action', actions.updateBoard(newBoard));
}
const moveDown = ( {meta} ) => {
	const newBoard = Array(20).fill(0).map(() => Array(10).fill(0));
	newBoard[18][0] = 1;
	newBoard[19][0] = 1;
	newBoard[18][1] = 1;
	newBoard[19][1] = 1;

	meta.player.socket.emit('action', actions.updateBoard(newBoard));
}
const rotate = ({meta}) => {
	console.log('rotating piece');
}
const dropPiece = ({meta}) => {
	const newBoard = Array(20).fill(0).map(() => Array(10).fill(0));
	newBoard[8][0] = 1;
	newBoard[9][0] = 1;
	newBoard[8][1] = 1;
	newBoard[9][1] = 1;

	meta.player.socket.emit('action', actions.updateBoard(newBoard));
}

export default function ( action ) {
	switch ( action.type ) {
		case actionTypes.SERVER_MOVE_PIECE_LEFT:
			return moveLeft(action);
		case actionTypes.SERVER_MOVE_PIECE_RIGHT:
			return moveRight(action);
		case actionTypes.SERVER_MOVE_PIECE_DOWN:
			return moveDown(action);
		case actionTypes.SERVER_ROTATE_PIECE:
			return rotate(action);
		case actionTypes.SERVER_DROP_PIECE:
			return dropPiece(action);
		default:
			return;
	}
}
