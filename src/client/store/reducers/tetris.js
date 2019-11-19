import * as actions from '../../../actions/actionTypes/tetris';

import { cloneDeep } from 'lodash';

const initialState = {
	board: null,
	opponents: null,
	score: 0,
	gameIsOver: false,
	matchIsOver: false,
};

const resetState = () => (initialState);

const setOpponents = ( state, {opponents} ) => ({
	...state,
	opponents: opponents
});
const updateBoard = ( state, {board} ) => ({
	...state,
	board: board
});
const updateOpponentSpectre = ( state, {id, spectre} ) => {
	const newOpponents = cloneDeep(state.opponents);
	newOpponents[state.opponents.findIndex(( elem ) => elem.id === id)].spectre = spectre;
	return {...state, opponents: newOpponents};
};
const updateScore = ( state, {score} ) => ({
	...state,
	score: score
});
const updateGameIsOver = ( state, {id} ) => ({
	...state,
	gameIsOver: true,
});
const updateMatchOver = ( state, { opponents }) => ({
	...state,
	matchIsOver: true,
	opponents: opponents,
});

export default ( state = initialState, action ) => {

	switch ( action.type ) {
		case actions.CLIENT_SET_OPPONENTS:
			return setOpponents(state, action);
		case actions.CLIENT_UPDATE_BOARD:
			return updateBoard(state, action);
		case actions.CLIENT_UPDATE_OPPONENT_SPECTRE:
			return updateOpponentSpectre(state, action);
		case actions.CLIENT_UPDATE_SCORE:
			return updateScore(state, action);
		case actions.CLIENT_GAME_OVER:
			return updateGameIsOver(state, action);
		case actions.CLIENT_MATCH_OVER:
			return updateMatchOver(state, action);
		case actions.CLIENT_RESET_STATE:
			return resetState(state, action);
		default :
			return state;
	}
};
