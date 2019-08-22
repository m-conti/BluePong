import { pick, cloneDeep, flatten } from 'lodash';
import generateTetriminos from '../Tetriminos/generateTetriminos';
import Piece from '../Piece/Piece';
import { updateBoard, updateNextPiece, updateScore } from '../../../actions/client/game';
import { collision, collisionWhenRotate, isFullLine } from '../../../../helpers/game/game';
import { LEFT, RIGHT, DOWN, BOARD, BOARD_WIDTH } from '../../../../constants/tetris';

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
		if(!collision(this.currentPiece, DOWN, this.board)) {
			this.currentPiece.y = this.currentPiece.y + 1;
			this.player.socket.emit('action', updateBoard(this.playableBoard));
		}
		else {
			this.piecePlaced();	
		}
		console.log('ACTION: DOWN');
	}

	rotate() {
		if (!collisionWhenRotate(this.currentPiece, this.board)) {
			this.currentPiece.tetrimino.rotate();
		}
		this.player.socket.emit('action', updateBoard(this.playableBoard));
		console.log('ACTION: ROTATE');
	}

	drop() {
		while(!collision(this.currentPiece, DOWN, this.board)) {
			this.currentPiece.y = this.currentPiece.y + 1;
		}
		this.piecePlaced();
		console.log('ACTION: DROP');
	}

	// SERIALIZER
	serializeAsOpponent() {
		return {
			id: this.player._id,
			spectre: this.board,
		}
	}

	piecePlaced() {
		this.board = this.playableBoard;
		this.score += 100 * this.removeLines();
		this.fetchCurrentPiece();
		this.player.socket.emit('action', updateScore(this.score));
		this.player.socket.emit('action', updateBoard(this.playableBoard));
	}

	removeLines() {
		let numberLinesRemoved = 0;
		let linesToRemove = [];
		const copyBoard = cloneDeep(this.board); 
		
		for (let i = 0; i < copyBoard.length; i++) {
			if (isFullLine(copyBoard[i])) {
				linesToRemove.push(this.board[i]);
				numberLinesRemoved++;
			}
		}

		//DOESN'T WORK PROPERLY YET
		for (let line of linesToRemove) {
			this.board.pop(line);
			this.board.unshift(new Array(BOARD_WIDTH).fill(0));
		}

		return (numberLinesRemoved);
	}
}

export default Game;
