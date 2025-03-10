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

export const updateOpponent = (opponent) => ({
	type: actionTypes.CLIENT_UPDATE_OPPONENT,
	opponent: opponent,
});

export const gameIsOver = (id) => ({
	type: actionTypes.CLIENT_GAME_OVER,
	id: id,
});

export const matchIsOver = (opponents, winner) => ({
	type: actionTypes.CLIENT_MATCH_OVER,
	opponents: opponents,
	winner: winner,
});

export const resetTetrisState = () => ({
	type: actionTypes.CLIENT_RESET_STATE,
});

export const updatePower = (power) => ({
	type: actionTypes.CLIENT_UPDATE_POWER,
	power: power.serialize()
});

export const updatePause = (pause) => ({
	type: actionTypes.CLIENT_UPDATE_PAUSE,
	pause,
});
