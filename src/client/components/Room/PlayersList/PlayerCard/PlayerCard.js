import React from 'react';

import classes from './PlayerCard.css';

import { Button } from '@material-ui/core';

const playerCard = ( props ) => {

	let ready;
	if ( props.playerId === props._id ) {
		ready = props.isReady ? <Button>Ready</Button> : <Button>UnReady</Button>;
	}
	else {
		ready = props.isReady ? <div>Ready</div> : <div>UnReady</div>;
	}
	return (
		<div className={classes.PlayerCard}>
			{props._id}
			{ready}
		</div>
	);
};
export default playerCard;
