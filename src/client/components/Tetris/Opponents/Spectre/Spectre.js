import React from 'react';

import classes from './Spectre.css';
import SpectreTile from './SpectreTile/SpectreTile';

const Spectre = ( props ) => {

	const tileArray = props.spectre.map((content, rowNumber) => {
		const rowContent = content.map((x, column) => (
			<SpectreTile content={x} key={`${rowNumber}.${column}`} gameover={props.gameover} little={props.little} winner={props.winner}/>
		));
		return (
			<div className={classes.SpectreBoardRow} key={rowNumber}>
				{rowContent}
			</div>
		)
	});
	const opponentClasses = [classes.Opponent];
	if (props.little) { opponentClasses.push(classes.OpponentLittle); }
	if (props.gameover && !props.winner) { opponentClasses.push(classes.GameOver); }

	return (
		<div className={opponentClasses.join(' ')}>
			<div>
				<div className={classes.OpponentInfos}>
					<div className={classes.Name}>{props.name}</div>
					<div className={classes.Score}>{props.score}</div>
				</div>
				<div className={classes.Spectre}>
					{tileArray}
				</div>
				<div className={classes.Wrap} />
			</div>
		</div>
	);
};

export default Spectre;
