import { LEFT, RIGHT, DOWN, BOARD_WIDTH, BOARD_HEIGHT, TILE_EMPTY_VALUE } from '../../constants/tetris';
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
	for (let y = 0; y < pieceCopy.figure.length; y++) {
		for (let x = 0; x < pieceCopy.figure[y].length; x++) {
			if (pieceCopy.figure[y][x] !== TILE_EMPTY_VALUE
				&&
					(((pieceCopy.x + x) < 0 || (pieceCopy.x + x) >= BOARD_WIDTH)
					|| ((pieceCopy.y + y < 0 || pieceCopy.y + y) >= BOARD_HEIGHT)
					|| (board[pieceCopy.y + y][pieceCopy.x + x] !== TILE_EMPTY_VALUE))
			) {
				return 1;
			}
		}
	}
	return 0;
}

export const collisionWhenRotate = (piece, board) => {

	const pieceCopy = cloneDeep(piece);
	pieceCopy.rotate();

	for (let y = 0; y < pieceCopy.figure.length; y++) {
		for (let x = 0; x < pieceCopy.figure[y].length; x++) {
			if (pieceCopy.figure[y][x] !== TILE_EMPTY_VALUE
				&& (((pieceCopy.x + x) < 0 || (pieceCopy.x + x) >= BOARD_WIDTH)
					|| ((pieceCopy.y + y < 0 || pieceCopy.y + y) >= BOARD_HEIGHT)
					|| (board[pieceCopy.y + y][pieceCopy.x + x] !== TILE_EMPTY_VALUE))) {
				return 1;
			}
		}
	}
	return 0;
}

export const isFullLine = (line) => {
	for (let i = 0; i < line.length; i++) {
		if (line[i] === TILE_EMPTY_VALUE)
			return 0;
	}
	return 1;
}

export const clearLine = (line) => {
	for (let i = 0; i < line.length; i++) {
		line[i] = 0;
	}
}

export const fallDown = (board, line) => {
	for (let i = line; i >= 0; i--) {
		for (let j = 0; j < BOARD_WIDTH; j++) {
			if (i === 0) {
				board[i][j] = TILE_EMPTY_VALUE;
			}
			else {
				board[i][j] = board[i - 1][j];
			}
		}
	}
}
