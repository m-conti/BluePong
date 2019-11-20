import React from 'react';
import * as propTypes from 'prop-types';

import classes from './Tile.css';

const Tile = ( props ) => {
	const colors = [
		classes.Empty,
		classes.I,
		classes.O,
		classes.T,
		classes.J,
		classes.L,
		classes.S,
		classes.Z,
		classes.Block,
	];

	const tileClasses = [classes.Tile];
	tileClasses.push(colors[props.content]);

	return <div className={tileClasses.join(' ')} />;
};

Tile.propTypes = {
	content: propTypes.number,
};

export default Tile;
