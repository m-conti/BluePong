import React, { useEffect } from 'react';

import classes from './Tile.css';

const Tile = ( props ) => {

	useEffect(() => {
	}, []);

	const colors = ['', classes.tealColor,  classes.navyColor]; 

	const tileClasses = [classes.Tile];
	tileClasses.push(colors[props.content]);

	return (
		<div className={tileClasses.join(' ')}>
		</div>
	);
};

export default Tile;
