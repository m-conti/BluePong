import React, { useEffect } from 'react';
import * as propTypes from 'prop-types';

import classes from './SpectreTile.css';

const SpectreTile = ( props ) => {

	useEffect(() => {
	}, []);

	const tileClasses = [classes.SpectreTile];
	if (props.little) { tileClasses.push(classes.LittleTile) }
	tileClasses.push(props.content ? classes.Full : classes.Empty);

	return (
		<div className={tileClasses.join(' ')} />
	);
};

SpectreTile.propTypes = {
	content: propTypes.number.isRequired,
};

export default SpectreTile;
