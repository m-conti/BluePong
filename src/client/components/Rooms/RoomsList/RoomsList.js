import React from 'react';

import * as propTypes from 'prop-types';
import roomType from '../../../propTypes/room/room';

import classes from './RoomsList.css';

import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import RoomListed from './RoomListed/RoomListed';

const roomsList = (props) => {

	const roomListed = props.rooms.map((elem) => (
		<RoomListed
			key={elem._id}
			_id={elem._id}
			creationTime={elem.creationTime}
			maxPlayers={elem.maxPlayers}
			name={elem.name}
			players={elem.players}
			isDone={elem.isDone}
			isPlaying={elem.isPlaying}
			isMaster={elem.master._id === props.user._id}
			onDeleteRoom={props.onDeleteRoom}
			onJoinRoom={props.onJoinRoom}
		/>
	));

	return (
		<div className={classes.RoomsList}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Slots</TableCell>
						<TableCell>Creation Time</TableCell>
						<TableCell>State</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{roomListed}
				</TableBody>
			</Table>
		</div>
	);
};
roomsList.propTypes = {
	onDeleteRoom: propTypes.func.isRequired,
	onJoinRoom: propTypes.func.isRequired,
	rooms: propTypes.arrayOf(roomType),
};

export default roomsList;
