import { pick, cloneDeep, flatten } from 'lodash';
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
		return this.board;
		const playableBoard = cloneDeep(this.board);
		const flatFigure = flatten(this.currentPiece.tetrimino.figure);
		const lineLength = this.currentPiece.tetrimino.figure.length;

		for (let i = 0; i < flatFigure.length; i++) {
			if (flatFigure[i]) {
				playableBoard[this.currentPiece.y + i / lineLength][this.currentPiece.x + i % lineLength]
					= flatFigure[i];
			}

		}
			//			tetrimino.figure
		return playableBoard; // Append currentPiece to board
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
		console.log('ACTION: LEFT');
		// ACTION
		if (this.currentPiece.x >= 1 && !collision(this.currentPiece, LEFT, this.board)) {
			this.currentPiece.x -= 1;
		}
		this.player.socket.emit('action', updateBoard(this.playableBoard));
	}

	moveRight() {
		console.log('ACTION: RIGHT');
		// ACTION
		this.player.socket.emit('action', updateBoard(this.playableBoard));
	}

	moveDown() {
		console.log('ACTION: DOWN');
		// ACTION
		this.player.socket.emit('action', updateBoard(this.playableBoard));
	}

	rotate() {
		console.log('ACTION: ROTATE');
		// ACTION
		this.player.socket.emit('action', updateBoard(this.playableBoard));
	}

	drop() {
		console.log('ACTION: DROP');
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

const collision = (piece, direction, board) => {
	return 0;
}

export default Game;
