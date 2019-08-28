import { BOARD_WIDTH } from '../../../../constants/tetris'

class Piece {
	constructor(tetrimino) {
		this.tetrimino = tetrimino;
		this.rotationIndex = 0;
		this.y = 0;
		this.x = Math.floor(BOARD_WIDTH / 2) - Math.floor(this.figure.length / 2);
	}

	rotate() {
		this.rotationIndex++;
	}

	get shape() {
		return this.tetrimino.rotations[this.rotationIndex % this.tetrimino.rotations.length];
	}

	get figure() {
		return this.shape.map(( row ) => row.map(( elem ) => elem ? this.tetrimino.value : 0));
	}
}

export default Piece;
