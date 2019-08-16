import React from 'react';
import * as propTypes from 'prop-types';

import {withRouter} from 'react-router-dom';

import {TableRow, TableCell, IconButton} from '@material-ui/core';
import { Delete, CastConnected } from '@material-ui/icons';


const roomListed = (props) => {

	return (
		<TableRow>
			<TableCell>{props.name}</TableCell>
			<TableCell>{props.players.length} / {props.maxPlayers}</TableCell>
			<TableCell>{props.creationTime}</TableCell>
			<TableCell>{props.isDone ? 'Fini' : props.isPlaying ? 'En cours' : 'En Attente'}</TableCell>
			<TableCell>
				<IconButton aria-label="Delete" onClick={() => props.onDeleteRoom(props.id)}>
					<Delete/>
				</IconButton>
				<IconButton aria-label="Connect" onClick={() => props.onConnectRoom(props.id)}>
					<CastConnected />
				</IconButton>
			</TableCell>
		</TableRow>
	)
};

export default roomListed;
