import React from 'react';

import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { Clear, Done, DoneAll, ExitToApp } from '@material-ui/icons';
import Tooltip from '../../../UI/Tooltip/Tooltip';

const playerCard = ( props ) => {
	let actions = <TableCell />;

	if (props.isPlayer) {
		actions = <TableCell>
			<IconButton onClick={props.toggleReady} >
				{props.isReady ? <Tooltip title="set unready"><DoneAll /></Tooltip> : <Tooltip title="set ready"><Done /></Tooltip>}
			</IconButton>
			<IconButton onClick={props.leaveRoom}><Tooltip title="leave room"><ExitToApp color='error' /></Tooltip></IconButton>
		</TableCell>
	}
	else if (props.isMaster) {
		actions = <TableCell>
			<IconButton onClick={props.leaveRoom}><Tooltip title="kick player"><Clear color='error' /></Tooltip></IconButton>
		</TableCell>;
	}

	return (
		<TableRow>
			<TableCell>{props.name}</TableCell>
			<TableCell>{props.isReady ? <Tooltip title="ready"><Done /></Tooltip> : <Tooltip title="not ready"><Clear color='error' /></Tooltip>}</TableCell>
			{actions}
		</TableRow>
	);
};
export default playerCard;
