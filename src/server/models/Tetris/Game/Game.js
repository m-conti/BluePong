import generateTetriminos from '../Tetriminos/generateTetriminos';
import { BOARD } from '../../../../constants/tetris';
import Piece from '../Piece/Piece';
import { cloneDeep, flatten } from 'lodash';
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
		const playableBoard = cloneDeep(this.board); 
		const flatFigure = flatten(this.currentPiece.tetrimino.figure);
		const lineLength = this.currentPiece.tetrimino.figure.length;

		for (let i = 0; i < flatFigure.length; i++) {
			if (flatFigure[i]) {
				playableBoard[this.currentPiece.y + i / lineLength][this.currentPiece.x + i % lineLength]
					= flatFigure[i];
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
		if (!collision(this.currentPiece, 'LEFT', this.board)) {
		}
		this.currentPiece.tetrimino
		this.player.socket.emit('action', updateBoard(this.playableBoard));
	}

	moveRight() {
		if (!collision(this.currentPiece, 'RIGHT', this.board)) {
		}
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

const collision = (piece, direction, board) => {
	

	return 0;
}

export default Game;
