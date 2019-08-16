import React from 'react';
import * as propTypes from 'prop-types';

import classes from './Spectre.css';
import SpectreTile from './SpectreTile/SpectreTile';

const Spectre = ( props ) => {

	const tileArray = props.spectre.map((content, rowNumber) => {
		const rowContent = content.map((x, column) => (
			<SpectreTile content={x} key={`${rowNumber}.${column}`} />
		));
		return (
			<div className={classes.SpectreBoardRow} key={rowNumber}>
				{rowContent}
			</div>
		)
	});

	return (
		<div className={classes.Spectre}>
			{tileArray}
		</div>
	);
};

Spectre.propTypes = {
	spectre: propTypes.arrayOf(propTypes.arrayOf(propTypes.number.isRequired).isRequired).isRequired,
};

export default Spectre;
