import React from 'react';

import * as propTypes from 'prop-types';
import playerType from '../../../../propTypes/player/player';

import { TableRow, TableCell, IconButton } from '@material-ui/core';
import { Delete, PlayArrow } from '@material-ui/icons';


const roomListed = ( props ) => {
	let state;

	if (props.isDone) { state = 'Done' }
	else if (props.isPlaying) { state = 'Playing' }
	else { state = 'Waiting' }

	return (
		<TableRow>
			<TableCell>{props.name}</TableCell>
			<TableCell>{props.players.length} / {props.maxPlayers}</TableCell>
			<TableCell>{props.creationTime}</TableCell>
			<TableCell>{state}</TableCell>
			<TableCell>
				{props.isMaster ? <IconButton aria-label='Delete' onClick={() => props.onDeleteRoom(props._id)}>
					<Delete/>
				</IconButton> : null}
				<IconButton aria-label='Connect' onClick={() => props.onJoinRoom(props._id)}>
					<PlayArrow />
				</IconButton>
			</TableCell>
		</TableRow>
	);
};

roomListed.propTypes = {
	_id: propTypes.number.isRequired,
	creationTime: propTypes.number,
	isDone: propTypes.bool.isRequired,
	maxPlayers: propTypes.number.isRequired,
	name: propTypes.string,
	onDeleteRoom: propTypes.func.isRequired,
	onJoinRoom: propTypes.func.isRequired,
	players: propTypes.arrayOf(playerType).isRequired,
};

export default roomListed;
