import React from 'react';

import classes from './Spectre.css';
import SpectreTile from './SpectreTile/SpectreTile';

const Spectre = ( props ) => {

	const tileArray = props.spectre.map((content, rowNumber) => {
		const rowContent = content.map((x, column) => (
			<SpectreTile content={x} key={`${rowNumber}.${column}`} little={props.little}/>
		));
		return (
			<div className={classes.SpectreBoardRow} key={rowNumber}>
				{rowContent}
			</div>
		)
	});
	const opponentClasses = [classes.Opponent];
	if (props.little) { opponentClasses.push(classes.OpponentLittle); }
	if (props.gameover) { opponentClasses.push(classes.GameOver); }

	return (
		<div className={opponentClasses.join(' ')}>
			<div className={classes.Name}>{props.name}</div>
			<div className={classes.Wrapper}>
				<div className={classes.Spectre}>
					{tileArray}
				</div>
				<div className={classes.Wrap} />
			</div>
		</div>
	);
};

export default Spectre;
