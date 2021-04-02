import React from 'react';

import classes from './Opponents.css';
import Spectre from './Spectre/Spectre';


const opponents = ( props ) => {

	const opponents = (props.opponents) ? props.opponents.map(o => (
		[
			<Spectre gameover={o.over} key={o.id} little={props.opponents.length > 1} name={o.name} spectre={o.spectre} />,
		]
	)) : null;

	return (
		<div className={classes.Opponents}>
			{opponents}
		</div>
	);
};

export default opponents;
