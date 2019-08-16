import React, { useEffect } from 'react';
import * as propTypes from 'prop-types';

import classes from './SpectreTile.css';

const SpectreTile = ( props ) => {

	useEffect(() => {
	}, []);

	const colors = [classes.fullSpectreTile, classes.emptySpectreTile];
	const tileClasses = [classes.SpectreTile];
	tileClasses.push(colors[props.content]);

	return (
		<div className={tileClasses.join(' ')} />
	);
};

SpectreTile.propTypes = {
	content: propTypes.number.isRequired,
};

export default SpectreTile;
