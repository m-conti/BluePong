import React from 'react';

import * as propTypes from 'prop-types';
import roomType from '../../../propTypes/room/room';

import classes from './RoomsList.css';

import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import RoomListed from './RoomListed/RoomListed';

const roomsList = (props) => {

	const roomListed = props.rooms.map((elem) => (
		<RoomListed
			_id={elem._id}
			creationTime={elem.creationTime}
			isDone={elem.isDone}
			isMaster={elem.master._id === props.user._id}
			isPlaying={elem.isPlaying}
			key={elem._id}
			maxPlayers={elem.maxPlayers}
			name={elem.name}
			onDeleteRoom={props.onDeleteRoom}
			onJoinRoom={props.onJoinRoom}
			players={elem.players}
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
