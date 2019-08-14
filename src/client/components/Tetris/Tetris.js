import React, { useEffect } from 'react';

import classes from './Tetris.css';

import Board from '../Board/Board';
import Score from '../Score/Score';

const Tetris = ( props ) => {

	useEffect(() => {
		props.init();
	}, []);


	return (
		<div className={classes.Tetris}>
			<Board rows={props.board} />
			<Score score={props.score} />
		</div>
	);
};

export default Tetris;
