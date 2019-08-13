import * as actions from '../../../actions/actionTypes/tetris';

import { cloneDeep } from 'lodash';

const initialState = {
	board: null,
	opponents: null,
	score: 0,
};


const setOpponents = ( state, {opponents} ) => {
	return {...state, opponents: opponents};
};
const updateBoard = ( state, {board} ) => {
	return {...state, board: board};
};
const updateOpponentSpectre = ( state, {id, spectre} ) => {
	const newOpponents = cloneDeep(state.opponents);
	newOpponents[state.opponents.findIndex(( elem ) => elem.id === id)].spectre = spectre;
	return {...state, opponents: newOpponents};
};
const updateScore = ( state, {score} ) => {
	return {...state, score: score};
};

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
		default :
			return state;
	}
};
