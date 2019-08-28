import { pick, cloneDeep, flatten } from 'lodash';
import generateTetriminos from '../Tetriminos/generateTetriminos';
import Piece from '../Piece/Piece';

import { updateBoard, updateNextPiece, updateScore, updateOpponentSpectre, gameIsOver} from '../../../actions/client/game';
import { collision, collisionWhenRotate, isFullLine, clearLine, fallDown } from '../../../../helpers/game/game';
import { LEFT, RIGHT, DOWN, BOARD, BOARD_WIDTH, INITIAL_GRAVITY_TIMEOUT } from '../../../../constants/tetris';

class Game {
	constructor( player, tetriminos ) {
		this.player = player;
		this.score = 0;
		this.tetriminosList = tetriminos;
		this.tetriminosIndex = 0;
		this.currentPiece = null;
		this.gravityTimeout = INITIAL_GRAVITY_TIMEOUT;
		this.board = BOARD();
		this.fetchCurrentPiece();
		this.player.socket.emit('action', updateBoard(this.playableBoard));
		this.player.socket.emit('action', updateScore(this.score));
		this.opponents = [];
	}

	get nextPiece() {
		return this.tetriminosList[this.tetriminosIndex];
	}

	get playableBoard() {
		const playableBoard = cloneDeep(this.board);
		const flatFigure = flatten(this.currentPiece.figure);
		const lineLength = this.currentPiece.figure.length;

		for (let i = 0; i < flatFigure.length; i++) {
			if (flatFigure[i]) {
				playableBoard[Math.floor(this.currentPiece.y + i / lineLength)]
				[Math.floor(this.currentPiece.x + i % lineLength)] = flatFigure[i];
			}
		}
		return playableBoard;
	}

	gameOver() {
		clearInterval(this.gravityLoop);
		this.player.socket.emit('action', gameIsOver(this.player._id));
	}

	fetchCurrentPiece() {
		this.currentPiece = new Piece(this.nextPiece);
		if (collision(this.currentPiece, null, this.board)) {
			this.gameOver();
		}
		else {
			this.tetriminosIndex++;
			if ( this.tetriminosIndex >= this.tetriminosList.length ) {
				this.tetriminosList.push(generateTetriminos());
			}
			this.player.socket.emit('action', updateNextPiece(this.nextPiece));

			if (this.gravityLoop) {
				clearInterval(this.gravityLoop);
			}
			this.gravityLoop = setInterval(() => {
				//TODO: Check que la game existe encore...
				this.moveDown();
			}, this.gravityTimeout);
		}
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
			this.currentPiece.rotate();
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
		this.opponents.forEach((opponent) => {
			opponent.player.socket.emit('action', updateOpponentSpectre(this.player._id, this.board));
		});
	}

	removeLines() {
		let numberLinesRemoved = 0;
		for (let i = 0; i < this.board.length; i++) {
			if (isFullLine(this.board[i])) {
				clearLine(this.board[i]);
				fallDown(this.board, i);
				numberLinesRemoved++;
			}
		}
		return (numberLinesRemoved);
	}
}

export default Game;
