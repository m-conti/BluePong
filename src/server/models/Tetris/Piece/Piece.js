import { BOARD_WIDTH } from '../../../../constants/tetris'

class Piece {
	constructor(tetrimino) {
		this.tetrimino = tetrimino;
		this.x = Math.floor(BOARD_WIDTH / 2) - Math.floor(tetrimino.figure.length / 2);
		this.y = 0;
	}
}

export default Piece;
