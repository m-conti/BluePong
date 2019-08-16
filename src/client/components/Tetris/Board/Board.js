import React, { useEffect } from 'react';
import * as propTypes from 'prop-types';

import classes from './Board.css';

import Tile from './Tile/Tile';
/*
export const startGame = () => dispatch => {
	dispatch({
		type: actions.CLIENT_SET_OPPONENTS,
		board: Array(20).fill(0).map(() => Array(10).fill(0))
	});
	dispatch({
		type: actions.CLIENT_SET_OPPONENTS,
		opponents: [
			{id: '1', spectre: Array(20).fill(0).map(() => Array(10).fill(0))}
		]
	});
};
*/

const Board = ( props ) => {

	useEffect(() => {
	}, []);


	const tileArray = props.board.map((content, rowNumber) => {
		const rowContent = content.map((x, column) => (
			<Tile content={x} key={`${rowNumber}.${column}`} />
		));
		return (
			<div className={classes.BoardRow} key={rowNumber}>
				{rowContent}
			</div>
		)
	});


	return (
		<div className={classes.Board}>
			{tileArray}
		</div>
	);
};

Board.propTypes = {
	board: propTypes.arrayOf(propTypes.arrayOf(propTypes.number.isRequired).isRequired),
};


export default Board;
