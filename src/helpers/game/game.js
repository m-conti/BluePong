import { LEFT, RIGHT, BOARD_WIDTH } from '../../constants/tetris';
import { cloneDeep } from 'lodash';

export const collision = (piece, direction, board) => {
	console.log("piece.x : ", piece.x);

	const pieceCopy = cloneDeep(piece);

	switch (direction) {
		case LEFT: 
			pieceCopy.x--;
			break;
		case RIGHT:
			pieceCopy.x++;
			break;
	}

	console.log("pieceCopy.x : ", pieceCopy.x);
		/*
		const flatFigure = flatten(this.currentPiece.tetrimino.figure);
		const lineLength = this.currentPiece.tetrimino.figure.length;

		for (let i = 0; i < flatFigure.length; i++) {
			if (flatFigure[i]) {
				playableBoard[Math.floor(this.currentPiece.y + i / lineLength)]
					[Math.floor(this.currentPiece.x + i % lineLength)] = flatFigure[i];
			}
		}
		*/
	for (let y = 0; y < pieceCopy.tetrimino.figure.length; y++) {
		for (let x = 0; x < pieceCopy.tetrimino.figure[y].length; x++) {
			
			console.log("pieceCopy.tetrimino.figure["+y+"]["+x+"]:",
				pieceCopy.tetrimino.figure[y][x]); 

			console.log("pieceCopy.x + x = ", pieceCopy.x + x);
			console.log("pieceCopy.tetrimino.figure["+y+"]["+x+"] !== 0", pieceCopy.tetrimino.figure[y][x] !== 0 );
			if (pieceCopy.tetrimino.figure[y][x] !== 0 
				&& ((pieceCopy.x + x) < 0 || (pieceCopy.x + x) >= BOARD_WIDTH))
				return 1;
		}
	}
	return 0;
}
