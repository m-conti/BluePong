import React from 'react';

import classes from './PlayerCard.css';

import { Button, IconButton, TableCell, TableRow } from '@material-ui/core';
import { Clear, Done, DoneAll, ExitToApp } from '@material-ui/icons';

const playerCard = ( props ) => {
	let actions = <TableCell />;

	if (props.isPlayer) {
		actions = <TableCell>
			<IconButton onClick={props.toggleReady}>{props.isReady ? <DoneAll /> : <Done />}</IconButton>
			<IconButton onClick={props.leaveRoom}><ExitToApp /></IconButton>
		</TableCell>
	}
	else if (props.isMaster) {
		actions = <TableCell>
			<IconButton onClick={props.leaveRoom}><Clear /></IconButton>
		</TableCell>;
	}

	return (
		<TableRow>
			<TableCell>{props.name}</TableCell>
			<TableCell>{props.isReady ? 'Ready' : 'Unready'}</TableCell>
			{actions}
		</TableRow>
	);
};
export default playerCard;
