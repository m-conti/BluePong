import React from 'react';
import { Backdrop } from '@material-ui/core';
import classes from './PauseGame.css';

const pauseGame = ( props ) => {

	return (
		<Backdrop className={classes.Backdrop} {...props}>
			<h1>PAUSE</h1>
			<p>press [ P ] to continue...</p>
		</Backdrop>
	);
};

export default pauseGame;
