import React from 'react';

import * as propTypes from 'prop-types';
import playerType from '../../../../propTypes/player/player';

import { TableRow, TableCell, IconButton } from '@material-ui/core';
import { Delete, CastConnected } from '@material-ui/icons';


const roomListed = ( props ) => {
	return (
		<TableRow>
			<TableCell>{props.name}</TableCell>
			<TableCell>{props.players.length} / {props.maxPlayers}</TableCell>
			<TableCell>{props.creationTime}</TableCell>
			<TableCell>{props.isDone ? 'Fini' : props.isPlaying ? 'En cours' : 'En Attente'}</TableCell>
			<TableCell>
				<IconButton aria-label="Delete" onClick={() => props.onDeleteRoom(props._id)}>
					<Delete/>
				</IconButton>
				<IconButton aria-label="Connect" onClick={() => props.onJoinRoom(props._id)}>
					<CastConnected/>
				</IconButton>
			</TableCell>
		</TableRow>
	);
};

roomListed.propTypes = {
	creationTime: propTypes.number,
	maxPlayers: propTypes.number.isRequired,
	name: propTypes.string,
	onDeleteRoom: propTypes.func.isRequired,
	onJoinRoom: propTypes.func.isRequired,
	players: propTypes.arrayOf(playerType).isRequired,
	isDone: propTypes.bool.isRequired,
	_id: propTypes.number.isRequired,
};

export default roomListed;
