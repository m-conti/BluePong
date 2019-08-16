import * as actionTypes from '../../../actions/actionTypes/tetris'; //change to game

export const updateBoard = (board) => ({
	type: actionTypes.CLIENT_UPDATE_BOARD,
	board: board,
});
