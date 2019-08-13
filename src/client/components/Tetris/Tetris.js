import React, { useEffect } from 'react';

import classes from './Tetris.css';

const Tetris = ( props ) => {

	useEffect(() => {
		props.init();
	}, []);


	return (
		<div className={classes.Tetris}>

		</div>
	);
};

export default Tetris;
