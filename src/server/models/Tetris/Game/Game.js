import { pick, cloneDeep, flatten } from 'lodash';
import generateTetriminos from '../Tetriminos/generateTetriminos';
import { BOARD } from '../../../../constants/tetris';
import Piece from '../Piece/Piece';
import { updateBoard, updateNextPiece, updateScore } from '../../../actions/client/game';
import { collision } from '../../../../helpers/game/game';
import { LEFT, RIGHT } from '../../../../constants/tetris';

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
		const playableBoard = cloneDeep(this.board);
		const flatFigure = flatten(this.currentPiece.tetrimino.figure);
		const lineLength = this.currentPiece.tetrimino.figure.length;

		for (let i = 0; i < flatFigure.length; i++) {
			if (flatFigure[i]) {
				playableBoard[Math.floor(this.currentPiece.y + i / lineLength)]
					[Math.floor(this.currentPiece.x + i % lineLength)] = flatFigure[i];
			}
		}
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
		if (!collision(this.currentPiece, LEFT, this.board)) {
			this.currentPiece.x = this.currentPiece.x - 1;
			this.player.socket.emit('action', updateBoard(this.playableBoard));
		}
		console.log('ACTION: LEFT');
	}

	moveRight() {
		if (!collision(this.currentPiece, RIGHT, this.board)) {
			this.currentPiece.x = this.currentPiece.x + 1;
			this.player.socket.emit('action', updateBoard(this.playableBoard));
		}
		console.log('ACTION: RIGHT');
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

export default Game;
