import * as actionTypes from '../../../actions/actionTypes/tetris';
import * as actions from '../client/game';

const startGame = ( {meta: {player}} ) => {
	const room = player.room;
	if ( !room ) throw new Error('player is not in a room');
	if ( player !== room.master ) throw new Error('player is not the master of the room');
	if (!room.canLaunch) throw new Error('Every players aren\'t ready');
	room.startMatch();
};

const moveLeft = ( {meta: {player}} ) => {
	const game = player.getGame();
	if (game) {
		game.moveLeft();
	}
};
const moveRight = ( {meta: {player}} ) => {
	const game = player.getGame();
	if (game) {
		game.moveRight();
	}
};
const moveDown = ( {meta: {player}} ) => {
	const game = player.getGame();
	if (game) {
		game.moveDown();
	}
};
const rotate = ( {meta: {player}} ) => {
	const game = player.getGame();
	if (game) {
		game.rotate();
	}
};
const dropPiece = ( {meta: {player}} ) => {
	const game = player.getGame();
	if (game) {
		game.drop();
	}
};

const nextPower = ( {meta: {player}} ) => {
	const game = player.getGame();
	if (game) {
		game.nextPower();
	}
};
const previousPower = ( {meta: {player}} ) => {
	const game = player.getGame();
	if (game) {
		game.previousPower();
	}
};

const restartGame = ( {meta: {player}} ) => {
	const room = player.room;
	if ( !room ) throw new Error('player is not in a room');
	if ( player !== room.master ) throw new Error('player is not the master of the room');
	room.restart();
};

export default function ( action ) {
	switch ( action.type ) {
		case actionTypes.SERVER_START_GAME:
			return startGame(action);
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
		case actionTypes.SERVER_NEXT_POWER:
			return nextPower(action);
		case actionTypes.SERVER_PREVIOUS_POWER:
			return previousPower(action);
		case actionTypes.SERVER_RESTART_GAME:
			return restartGame(action);
		default:
			return;
	}
}
