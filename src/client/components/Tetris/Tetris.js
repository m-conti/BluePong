import React, { useEffect, useState } from 'react';
import * as propTypes from 'prop-types';

import classes from './Tetris.css';

import Board from './Board/Board';
import Infos from './Infos/Infos';
import Opponents from './Opponents/Opponents';
import NextPiece from './NextPiece/NextPiece';
import MatchOver from './MatchOver/MatchOver';
import PauseGame from './PauseGame/PauseGame';

import { ARROW_LEFT, ARROW_RIGHT, ARROW_UP, ARROW_DOWN, SPACE_KEY, Z_KEY, X_KEY, P_KEY } from '../../../constants/tetris';


const Tetris = ( props ) => {
	const board = (props.board) ? <Board board={props.board} /> : <div>Spinner</div>;
	const nextPiece = (props.nextPiece) ? <NextPiece {...props.nextPiece} /> : null;

	const [ref, setRef] = useState(null);

	useEffect(() => {
		if (ref) { ref.focus(); }
	});

	const keyDownPressHandler = (event) => {
		switch (event.key) {
			case ARROW_LEFT :
				props.moveLeft();
				return;
			case ARROW_RIGHT :
				props.moveRight();
				return;
			case ARROW_UP :
				props.rotate();
				return;
			case ARROW_DOWN :
				props.moveDown();
				return;
			case SPACE_KEY :
				props.drop();
				return;
			case X_KEY :
				props.powerNext();
				return;
			case Z_KEY :
				props.powerPrevious();
				return;
			case P_KEY :
				props.pauseGame();
			default :
				return;
		}
	};

	const matchOver = props.matchIsOver ? <MatchOver
		isMaster={props.isMaster}
		leave={props.leave}
		opponents={props.opponents}
		player={props.player}
		playerScore={props.score}
		restart={props.restart}
		winner={props.winner}
	/> : null;

	return (
		<div className={classes.Tetris} onKeyDown={keyDownPressHandler} ref={setRef} tabIndex={'1'}>
			{board}
			<div className={classes.Hud}>
				<Infos power={props.power} score={props.score} />
				{nextPiece}
				<Opponents opponents={props.opponents} />
			</div>
			{matchOver}
			<PauseGame open={props.pause} />
		</div>
	);
};

Tetris.propTypes = {
	board: propTypes.arrayOf(propTypes.arrayOf(propTypes.number.isRequired).isRequired),
	drop: propTypes.func.isRequired,
	init: propTypes.func.isRequired,
	leave: propTypes.func.isRequired,
	matchIsOver: propTypes.bool.isRequired,
	moveDown: propTypes.func.isRequired,
	moveLeft: propTypes.func.isRequired,
	moveRight: propTypes.func.isRequired,
	opponents: propTypes.arrayOf(propTypes.shape({
		id: propTypes.number.isRequired,
		spectre: propTypes.arrayOf(propTypes.arrayOf(propTypes.number.isRequired).isRequired).isRequired,
	}).isRequired),
	player: propTypes.shape({}),
	power: propTypes.shape({}),
	powerNext: propTypes.func.isRequired,
	powerPrevious: propTypes.func.isRequired,
	rotate: propTypes.func.isRequired,
	score: propTypes.number.isRequired,
};

export default Tetris;
