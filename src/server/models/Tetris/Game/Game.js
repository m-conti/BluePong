import { pick, cloneDeep, flatten } from 'lodash';
import generateTetriminos from '../Tetriminos/generateTetriminos';

import Piece from '../Piece/Piece';
import { updateBoard, updateNextPiece, updateScore, updatePower, updateOpponentSpectre, updateOpponent, gameIsOver, updatePause } from '../../../actions/client/game';
import { collision, collisionWhenRotate, isFullLine, clearLine, fallDown } from '../../../../helpers/game/game';

import { regularPowers } from './Power/power';

import { LEFT, RIGHT, DOWN, BOARD, BOARD_WIDTH, INITIAL_GRAVITY_TIMEOUT, TILE_BLOCK_VALUE } from '../../../../constants/tetris';


class Game {
	constructor( player, match ) {
		this.player = player;
		this.score = 0;
		this.tetriminosList = match.tetriminos;
		this.tetriminosIndex = 0;
		this.powerIndex = 0;
		this.currentPiece = null;
		this.gravityTimeout = INITIAL_GRAVITY_TIMEOUT;
		this.board = BOARD();
		this.fetchCurrentPiece();
		this.over = false;
		this.winner = false;
		this.pause = false;
		this.player.socket.emit('action', updateBoard(this.playableBoard));
		this.player.socket.emit('action', updateScore(this.score));
		this.player.socket.emit('action', updatePower(this.power));
		this.opponents = [];
		this.match = match;
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

	get power() {
		return regularPowers[this.powerIndex];
	}

	get isPlaying() {
		return !(this.over || this.pause);
	}

	get spectre() {
		return this.board.reduce((array, line, index) => {
			const previousLine = array.length ? array[index - 1] : null;
			return [...array, line.map((value, index) => !!(value | (previousLine && previousLine[index])))];
		}, []);
	}

	nextPower() {
		this.powerIndex = (this.powerIndex + 1) % regularPowers.length;
		this.player.socket.emit('action', updatePower(this.power));
	}

	previousPower() {
		this.powerIndex = this.powerIndex > 0 ? (this.powerIndex - 1) : (regularPowers.length - 1);
		this.player.socket.emit('action', updatePower(this.power));
	}

	updateSpectre() {
		this.opponents.forEach((opponent) => {
			opponent.player.socket.emit('action', updateOpponentSpectre(this.player._id, this.spectre));
		});
	}

	updateAsOpponent() {
		this.opponents.forEach((opponent) => {
			opponent.player.socket.emit('action', updateOpponent(this.serializeAsOpponent()));
		});
	}

	gameOver() {
		clearInterval(this.gravityLoop);
		this.over = true;
		this.match.checkEnd();
		this.player.socket.emit('action', gameIsOver(this.player._id));
		this.updateAsOpponent();
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
			this.player.socket.emit('action', updateNextPiece(this.nextPiece.serialize()));

			if (this.gravityLoop) {
				clearInterval(this.gravityLoop);
			}
			this.gravityLoop = setInterval(() => {
				this.moveDown();
			}, this.gravityTimeout);
		}
	}

	moveLeft() {
		if (!this.isPlaying) { return; }
		if (!collision(this.currentPiece, LEFT, this.board)) {
			this.currentPiece.x = this.currentPiece.x - 1;
			this.player.socket.emit('action', updateBoard(this.playableBoard));
		}
	}

	moveRight() {
		if (!this.isPlaying) { return; }
		if (!collision(this.currentPiece, RIGHT, this.board)) {
			this.currentPiece.x = this.currentPiece.x + 1;
			this.player.socket.emit('action', updateBoard(this.playableBoard));
		}
	}

	moveDown() {
		if (!this.isPlaying) { return; }
		if(!collision(this.currentPiece, DOWN, this.board)) {
			this.currentPiece.y = this.currentPiece.y + 1;
			this.player.socket.emit('action', updateBoard(this.playableBoard));
		}
		else {
			this.piecePlaced();
		}
	}

	rotate() {
		if (!this.isPlaying) { return; }
		if (!collisionWhenRotate(this.currentPiece, this.board)) {
			this.currentPiece.rotate();
		}
		this.player.socket.emit('action', updateBoard(this.playableBoard));
	}

	drop() {
		if (!this.isPlaying) { return; }
		while(!collision(this.currentPiece, DOWN, this.board)) {
			this.currentPiece.y = this.currentPiece.y + 1;
		}
		this.piecePlaced();
	}

	togglePause(value=!this.pause) {
		return this.pause = value;
	}

	performPause() {
		if (this.togglePause()) {
			clearInterval(this.gravityLoop);
		}
		else {
			this.gravityLoop = setInterval(() => {
				this.moveDown();
			}, this.gravityTimeout);
		}
		this.player.socket.emit('action', updatePause(this.pause));
	}

	// SERIALIZER
	serializeAsOpponent() {
		return {
			id: this.player._id,
			name: this.player.name,
			spectre: this.spectre,
			over: this.over,
			score: this.score,
			winner: this.winner,
		}
	}

	piecePlaced() {
		this.board = this.playableBoard;
		this.score += 100 * this.removeLines();
		this.fetchCurrentPiece();
		this.player.socket.emit('action', updateScore(this.score));
		this.player.socket.emit('action', updateBoard(this.playableBoard));
		this.updateSpectre();
	}

	addHandicapLines(nbLines) {
		if (!this.isPlaying) { return; }
		for (let i = 0; i < nbLines; i++) {
			this.addHandicapLine();
		}
		this.player.socket.emit('action', updateBoard(this.playableBoard));
		this.updateSpectre();
	}

	addHandicapLine() {
		if (this.board.shift().some(elem => elem)) {
			this.gameOver();
		}
		this.board.push(new Array(BOARD_WIDTH).fill(TILE_BLOCK_VALUE))
	}

	removeLine(line) {
		if (line < 0 || line >= this.board.length) { return; }

		clearLine(this.board[line]);
		fallDown(this.board, line);
	}

	removeLines() {
		let numberLinesRemoved = 0;
		for (let i = 0; i < this.board.length; i++) {
			if (isFullLine(this.board[i]) && this.board[i][0] !== TILE_BLOCK_VALUE) {
				this.removeLine(i);
				numberLinesRemoved++;
			}
		}
		if (numberLinesRemoved - 1 > 0) {
			this.power.use(this, numberLinesRemoved - 1);
		}
		return (numberLinesRemoved);
	}
}

export default Game;
