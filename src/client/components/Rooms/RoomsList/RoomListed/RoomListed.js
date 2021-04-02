import React from 'react';

import * as propTypes from 'prop-types';
import playerType from '../../../../propTypes/player/player';

import { withRouter } from 'react-router-dom';
import { CLIENT_ROOMS } from '../../../../../constants/path'

import { TableRow, TableCell, IconButton } from '@material-ui/core';
import { Delete, PlayArrow } from '@material-ui/icons';
import Tooltip from '../../../UI/Tooltip/Tooltip';



const roomListed = ( props ) => {

	const tryToJoinRoom = () => {
		if (props.players.some((player) => player._id === props.user._id)) {
			props.history.push(`${CLIENT_ROOMS}/${props._id}`);
		}
		else {
			props.onJoinRoom(props._id)
		}
	};

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
				{props.isMaster ? <Tooltip title="delete room"><IconButton aria-label='Delete' onClick={() => props.onDeleteRoom(props._id)}>
					<Delete/>
				</IconButton></Tooltip> : null}
				<Tooltip title="join room">
					<IconButton aria-label='Connect' onClick={tryToJoinRoom}>
						<PlayArrow />
					</IconButton>
				</Tooltip>
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

export default withRouter(roomListed);
