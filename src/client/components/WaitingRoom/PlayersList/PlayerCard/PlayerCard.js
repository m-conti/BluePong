import React from 'react';

import classes from './PlayerCard.css';

import { Button, IconButton, TableCell, TableRow } from '@material-ui/core';
import { Clear, Done, DoneAll, ExitToApp } from '@material-ui/icons';

import { SECONDARY_COLOR } from '../../../../styles/constant';

const playerCard = ( props ) => {
	let actions = <TableCell />;

	if (props.isPlayer) {
		actions = <TableCell>
			<IconButton onClick={props.toggleReady} >
				{props.isReady ? <DoneAll /> : <Done />}
			</IconButton>
			<IconButton onClick={props.leaveRoom}><ExitToApp color="error" /></IconButton>
		</TableCell>
	}
	else if (props.isMaster) {
		actions = <TableCell>
			<IconButton onClick={props.leaveRoom}><Clear color="error" /></IconButton>
		</TableCell>;
	}

	return (
		<TableRow>
			<TableCell>{props.name}</TableCell>
			<TableCell>{props.isReady ? <Done /> : <Clear color="error" />}</TableCell>
			{actions}
		</TableRow>
	);
};
export default playerCard;
