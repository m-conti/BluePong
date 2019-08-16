import React, { useEffect } from 'react';

import classes from './Spectre.css';
import SpectreTile from './SpectreTile/SpectreTile';

const Spectre = ( props ) => {

	useEffect(() => {
	}, []);

	//	const spectreBoard = props.opponent ? props.
	
	const tileArray = props.opponent.spectre.map((content, rowNumber) => {
		const rowContent = content.map((x, column) => (
			<SpectreTile content={x} key={rowNumber + "." + column} />
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

export default Spectre;
