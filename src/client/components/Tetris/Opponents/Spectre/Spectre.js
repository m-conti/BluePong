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
	const opponentClasses = [classes.Opponent];
	if (props.little) { opponentClasses.push(classes.OpponentLittle); }

	return (
		<div className={opponentClasses.join(' ')}>
			<div className={classes.Name}>{props.name}</div>
			<div className={classes.Spectre}>
				{tileArray}
			</div>
		</div>
	);
};

Spectre.propTypes = {
	spectre: propTypes.arrayOf(propTypes.arrayOf(propTypes.number.isRequired).isRequired).isRequired,
};

export default Spectre;
