import React, { useEffect } from 'react';
import * as propTypes from 'prop-types';

import classes from './Tetris.css';

import Board from './Board/Board';
import Score from './Score/Score';
import Spectre from './Spectre/Spectre';


const Tetris = ( props ) => {

	useEffect(() => {
		props.init();
	}, []);

	const board = (props.board) ? <Board board={props.board} /> : <div>Spinner</div>;
	const score = (props.score) ? <Score score={props.score} /> : null;

	const opponents = (props.opponents) ? props.opponents.map(o => (
		<Spectre key={o.id} spectre={o.spectre} />
	)) : null;

	return (
		<div className={classes.Tetris}>
			{board}
			{score}
			{opponents}
		</div>
	);
};

Tetris.propTypes = {
	board: propTypes.arrayOf(propTypes.arrayOf(propTypes.number.isRequired).isRequired),
	init: propTypes.func.isRequired,
	opponents: propTypes.arrayOf(propTypes.shape({
		id: propTypes.string.isRequired,
		spectre: propTypes.arrayOf(propTypes.arrayOf(propTypes.number.isRequired).isRequired).isRequired,
	}).isRequired),
	score: propTypes.number.isRequired,
};

export default Tetris;

