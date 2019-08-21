import { pick } from 'lodash';
import generateTetriminos from '../Tetriminos/generateTetriminos';
import { BOARD } from '../../../../constants/tetris';
import Piece from '../Piece/Piece';
import { updateBoard, updateNextPiece, updateScore } from '../../../actions/client/game';

class Game {
	constructor( player, tetriminos ) {
		this.player = player;
		this.score = 0;
		this.tetriminosList = tetriminos;
		this.tetriminosIndex = 0;
		this.currentPiece = null;
		this.board = BOARD();
		this.fetchCurrentPiece();
		this.player.socket.emit('action', updateBoard(this.playableBoard));
		this.player.socket.emit('action', updateScore(this.score));
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

	// SERIALIZER
	serializeAsOpponent() {
		return {
			id: this.player._id,
			spectre: this.board,
		}
	}
}

export default Game;
