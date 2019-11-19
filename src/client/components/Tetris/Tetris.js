import React, { useEffect, useState } from 'react';
import * as propTypes from 'prop-types';

import classes from './Tetris.css';

import Board from './Board/Board';
import Score from './Score/Score';
import Spectre from './Spectre/Spectre';
import MatchOver from './MatchOver/MatchOver';

import { ARROW_LEFT, ARROW_RIGHT, ARROW_UP, ARROW_DOWN, SPACE_KEY } from '../../../constants/tetris';


const Tetris = ( props ) => {
	const board = (props.board) ? <Board board={props.board} /> : <div>Spinner</div>;
	const score = (props.score) ? <Score score={props.score} /> : null;

	const [ref, setRef] = useState(null);

	useEffect(() => {
		if (ref) { ref.focus(); }
	});

	const keyDownPressHandler = (event) => {
		switch (event.key) {
			case ARROW_LEFT :
				props.moveLeft();
				console.log('left');
				return;
			case ARROW_RIGHT :
				props.moveRight();
				console.log('right');
				return;
			case ARROW_UP :
				props.rotate();
				console.log('up');
				return;
			case ARROW_DOWN :
				props.moveDown();
				console.log('down');
				return;
			case SPACE_KEY :
				props.drop();
				console.log('space');
				return;
			default :
				return;
		}
	};

	const keyUpPressHandler = (event) => {
		switch (event.key) {
			case ARROW_DOWN :
				console.log('down is up');
		}
	};

	const opponents = (props.opponents) ? props.opponents.map(o => (
		<Spectre key={o.id} spectre={o.spectre} />
	)) : null;

	const matchOver = props.matchIsOver ? <MatchOver
		leave={props.leave}
		opponents={props.opponents}
		player={props.player}
		playerScore={props.score} /> : null;

	return (
		<div className={classes.Tetris} ref={setRef} onKeyDown={keyDownPressHandler} onKeyUp={keyUpPressHandler} tabIndex={'1'}>
			{board}
			{score}
			{opponents}
			{matchOver}
		</div>
	);
};

Tetris.propTypes = {
	board: propTypes.arrayOf(propTypes.arrayOf(propTypes.number.isRequired).isRequired),
	init: propTypes.func.isRequired,
	moveLeft: propTypes.func.isRequired,
	moveRight: propTypes.func.isRequired,
	moveDown: propTypes.func.isRequired,
	rotate: propTypes.func.isRequired,
	drop: propTypes.func.isRequired,
	opponents: propTypes.arrayOf(propTypes.shape({
		id: propTypes.string.isRequired,
		spectre: propTypes.arrayOf(propTypes.arrayOf(propTypes.number.isRequired).isRequired).isRequired,
	}).isRequired),
	score: propTypes.number.isRequired,
};

export default Tetris;
