import { generateTetriminos } from '../Tetriminos/Tetriminos';
import { BOARD } from '../../../../constants/tetris';
import Piece from '../Piece/Piece';


class Game {
	constructor( player, tetriminos ) {
		this.tetriminosList = tetriminos;
		this.tetriminosIndex = 0;
		this.currentPiece = null;
		this.board = BOARD();

		this.fetchCurrentPiece();
	}

	get nextPiece() {
		return this.tetriminosList[this.tetriminosIndex];
	}

	fetchCurrentPiece() {
		this.currentPiece = new Piece(this.nextPiece);
		this.tetriminosIndex++;
		if ( this.tetriminosIndex >= this.tetriminosList.length ) {
			this.tetriminosList.push(generateTetriminos());
		}
	}

}

export default Game;
