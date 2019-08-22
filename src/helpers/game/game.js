import { LEFT, RIGHT, DOWN, BOARD_WIDTH, BOARD_HEIGHT } from '../../constants/tetris';
import { cloneDeep } from 'lodash';

export const collision = (piece, direction, board) => {

	const pieceCopy = cloneDeep(piece);

	switch (direction) {
		case LEFT: 
			pieceCopy.x--;
			break;
		case RIGHT:
			pieceCopy.x++;
			break;
		case DOWN:
			pieceCopy.y++;
			break;
	}
	for (let y = 0; y < pieceCopy.tetrimino.figure.length; y++) {
		for (let x = 0; x < pieceCopy.tetrimino.figure[y].length; x++) {
			if (pieceCopy.tetrimino.figure[y][x] !== 0 
				&&
					(((pieceCopy.x + x) < 0 || (pieceCopy.x + x) >= BOARD_WIDTH)
					|| ((pieceCopy.y + y < 0 || pieceCopy.y + y) >= BOARD_HEIGHT)
					|| (board[pieceCopy.y + y][pieceCopy.x + x] !== 0))
			) {
				return 1;
			}
		}
	}
	return 0;
}

export const collisionWhenRotate = (piece, board) => {

	const pieceCopy = cloneDeep(piece);
	pieceCopy.tetrimino.rotate();

	for (let y = 0; y < pieceCopy.tetrimino.figure.length; y++) {
		for (let x = 0; x < pieceCopy.tetrimino.figure[y].length; x++) {
			if (pieceCopy.tetrimino.figure[y][x] !== 0 
				&& (((pieceCopy.x + x) < 0 || (pieceCopy.x + x) >= BOARD_WIDTH)
					|| ((pieceCopy.y + y < 0 || pieceCopy.y + y) >= BOARD_HEIGHT)
					|| (board[pieceCopy.y + y][pieceCopy.x + x] !== 0))) {
				return 1;
			}
		}
	}
	return 0;
}

export const isFullLine = (line) => {
	for (let i = 0; i < line.length; i++) {
		if (line[i] === 0)
			return 0;
	}
	return 1;
}
