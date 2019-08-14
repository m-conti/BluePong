import React, { useEffect } from 'react';

import classes from './Tetris.css';

import Board from '../Board/Board';
import Score from '../Score/Score';
import Spectre from '../Spectre/Spectre';


const Tetris = ( props ) => {

	useEffect(() => {
		props.init();
	}, []);

	const board = (props.board) ? <Board board={props.board} /> : <div>Spinner</div>; //should be props.board below
	const score = (props.score) ? <Score score={props.score} /> : '';
	
	const opponents = (props.opponents) ? props.opponents.map(o => {
		<Spectre board={o} />	
	}) : '';
	
	return (
		<div className={classes.Tetris}>
			{board}
			{score}
			{opponents}
		</div>
	);
};

export default Tetris;

