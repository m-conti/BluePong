import generateTetriminos from '../Tetriminos/generateTetriminos';
import { BOARD } from '../../../../constants/tetris';
import Piece from '../Piece/Piece';
import { updateBoard, updateNextPiece } from '../../../actions/client/game';

class Game {
	constructor( player, tetriminos ) {
		this.player = player;
		this.tetriminosList = tetriminos;
		this.tetriminosIndex = 0;
		this.currentPiece = null;
		this.board = BOARD();
		this.fetchCurrentPiece();
	}

	get nextPiece() {
		return this.tetriminosList[this.tetriminosIndex];
	}

	get playableBoard() {
		return this.board; // Append currentPiece to board
	}

	fetchCurrentPiece() {
		this.currentPiece = new Piece(this.nextPiece);
		this.tetriminosIndex++;
		if ( this.tetriminosIndex >= this.tetriminosList.length ) {
			this.tetriminosList.push(generateTetriminos());
		}
		this.player.socket.emit('action', updateNextPiece(this.nextPiece));
	}

	moveLeft() {
		// ACTION
		this.player.socket.emit('action', updateBoard(this.playableBoard));
	}

	moveRight() {
		// ACTION
		this.player.socket.emit('action', updateBoard(this.playableBoard));
	}

	moveDown() {
		// ACTION
		this.player.socket.emit('action', updateBoard(this.playableBoard));
	}

	rotate() {
		// ACTION
		this.player.socket.emit('action', updateBoard(this.playableBoard));
	}

	drop() {
		// ACTION
		this.player.socket.emit('action', updateBoard(this.playableBoard));
	}

}

export default Game;
