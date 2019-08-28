import * as actionTypes from '../../../actions/actionTypes/tetris'; //change to game

export const setOpponents = (opponents) => ({
	type: actionTypes.CLIENT_SET_OPPONENTS,
	opponents: opponents,
});

export const updateBoard = (board) => ({
	type: actionTypes.CLIENT_UPDATE_BOARD,
	board: board,
});

export const updateNextPiece = (piece) => ({
	type: actionTypes.CLIENT_UPDATE_NEXT_PIECE,
	piece: piece,
});

export const updateScore = (score) => ({
	type: actionTypes.CLIENT_UPDATE_SCORE,
	score: score,
});

export const updateOpponentSpectre = (id, spectre) => ({
	type: actionTypes.CLIENT_UPDATE_OPPONENT_SPECTRE,
	spectre: spectre,
	id: id,
});

