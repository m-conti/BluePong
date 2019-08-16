import React from 'react';
import * as propTypes from 'prop-types';

import classes from './RoomsList.css';

import {Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';

import RoomListed from './RoomListed/RoomListed';

const roomsList = (props) => {

	const roomListed = props.rooms.map((elem) => (
		<RoomListed
			key={elem.id} {...elem}
			onDeleteRoom={props.onDeleteRoom}
			onConnectRoom={props.onConnectRoom}
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
						<TableCell>Etat</TableCell>
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
	rooms: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.number.isRequired,
		})
	).isRequired,

};

export default roomsList;
