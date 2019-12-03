import * as actionTypes from '../../../actions/actionTypes/rooms';
import * as actions from '../client/rooms';

import {CLIENT_ROOMS} from '../../../constants/path';
import { push } from 'connected-react-router';

import sockets from '../../models/Sockets/Sockets';

const getRooms = ( {meta: {player}} ) => {
	player.socket.emit('action', actions.updateRooms(sockets.tetris.rooms));
};
const getRoom = ( {meta: {player}, id} ) => {
	const room = sockets.tetris.getRoom(id);
	player.socket.emit('action', actions.updateRoom(room));
};
const createRoom = ( {meta: {player}, room} ) => {
	const {_id} = sockets.tetris.addRoom(room, player);
	player.socket.emit('action', push(`${CLIENT_ROOMS}/${_id}`));
};
const deleteRoom = ( {meta: {player}, id} ) => {
	const room = sockets.tetris.getRoom(id);
	if ( room.master !== player && !player.isAdmin )
		throw new Error(`Player doesn't have permissions to delete this room`);
	room.delete();
};
const joinRoom = ( {meta: {player}, id} ) => {
	const room = sockets.tetris.getRoom(id);
	player.join(room);
	player.socket.emit('action', push(`${CLIENT_ROOMS}/${id}`));
};
const leaveRoom = ( {meta: {player}, id} ) => {
	const playerToKick = sockets.getPlayerById(id);
	const room = playerToKick.room;
	if (player !== playerToKick && (!playerToKick.room || room.master._id !== player._id)) { return; }
	playerToKick.leave(room);
};
const readyToggle = ( {meta: {player}} ) => {
	if ( !player.room ) return;
	player.room.togglePlayerReady(player);
};


export default function ( action ) {
	switch ( action.type ) {
		case actionTypes.SERVER_GET_ROOMS:
			return getRooms(action);
		case actionTypes.SERVER_GET_ROOM:
			return getRoom(action);
		case actionTypes.SERVER_CREATE_ROOM:
			return createRoom(action);
		case actionTypes.SERVER_DELETE_ROOM:
			return deleteRoom(action);
		case actionTypes.SERVER_JOIN_ROOM:
			return joinRoom(action);
		case actionTypes.SERVER_LEAVE_ROOM:
			return leaveRoom(action);
		case actionTypes.SERVER_READY_TOGGLE:
			return readyToggle(action);
		default:
			return;
	}
}
