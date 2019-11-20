import React from 'react';
import * as propTypes from 'prop-types';

import classes from './Spectre.css';
import SpectreTile from './SpectreTile/SpectreTile';

const Spectre = ( props ) => {

	const tileArray = props.spectre.map((content, rowNumber) => {
		const rowContent = content.map((x, column) => (
			<SpectreTile little={props.little} content={x} key={`${rowNumber}.${column}`} />
		));
		return (
			<div className={classes.SpectreBoardRow} key={rowNumber}>
				{rowContent}
			</div>
		)
	});
	const spectreClasses = [classes.Spectre];
	if (props.little) { spectreClasses.push(classes.SpectreLittle); }

	return (
		<div className={spectreClasses.join(' ')}>
			{tileArray}
		</div>
	);
};

Spectre.propTypes = {
	spectre: propTypes.arrayOf(propTypes.arrayOf(propTypes.number.isRequired).isRequired).isRequired,
};

export default Spectre;
