import React from 'react';
import * as propTypes from 'prop-types';

import classes from './Tile.css';

const Tile = ( props ) => {
	const colors = ['', classes.tealColor, classes.navyColor];

	const tileClasses = [classes.Tile];
	tileClasses.push(colors[props.content]);

	return <div className={tileClasses.join(' ')}>{props.content}</div>;
};

Tile.propTypes = {
	content: propTypes.number,
};

export default Tile;
