import React from 'react';

import classes from './Opponents.css';
import Spectre from './Spectre/Spectre';

const buildOpponents = ( opponents ) => {
	if (opponents.length === 3) {
		return (
			<div>
				<div className={classes.FirstTwo}>
					<Spectre gameover={opponents[0].over} key={opponents[0].id} little={1} name={opponents[0].name} spectre={opponents[0].spectre} score={opponents[0].score} winner={o.winner}/>
					<Spectre gameover={opponents[1].over} key={opponents[1].id} little={1} name={opponents[1].name} spectre={opponents[1].spectre} score={opponents[1].score} winner={o.winner}/>
				</div>
				<Spectre gameover={opponents[2].over} key={opponents[2].id} little={1} name={opponents[2].name} spectre={opponents[2].spectre} score={opponents[2].score} winner={o.winner}/>
			</div>
		)
	}
	else {
		return((opponents) ? opponents.map(o => (
			<Spectre gameover={o.over} key={o.id} little={opponents.length > 1} name={o.name} spectre={o.spectre} score={o.score} winner={o.winner}/>
		)) : null);
	}
}

const opponents = ( props ) => {
	const opponents = buildOpponents(props.opponents);
	return (
		<div className={classes.Opponents}>
			{opponents}
		</div>
	);
};

export default opponents;
