import React, { useEffect } from 'react';

import classes from './SpectreTile.css';

const SpectreTile = ( props ) => {

	useEffect(() => {
	}, []);

	const colors = [classes.fullSpectreTile,  classes.emptySpectreTile]; 
	const tileClasses = [classes.SpectreTile];
	tileClasses.push(colors[props.content]);

	return (
		<div className={tileClasses.join(' ')}>
		</div>
	);
};

export default SpectreTile;
