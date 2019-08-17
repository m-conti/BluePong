import * as actionTypes from '../../../actions/actionTypes/rooms';
import * as actions from '../client/rooms';
import { push } from 'connected-react-router';

// /!\ serializer room and user before sending them to client

const getRooms = ( {meta} ) => {
	meta.player.socket.emit('action', actions.updateRooms(meta.tetris.rooms));
};
const getRoom = ( {meta, id} ) => {
	const room = meta.tetris.getRoom(id);
	if ( room ) {
		meta.player.socket.emit('action', actions.updateRoom(room));
	}
};
const createRoom = ( {meta, room} ) => {
	const newRoom = meta.tetris.addRoom(room, meta.player);
	meta.io.emit('action', actions.addRoom(newRoom));
	meta.player.socket.emit('action', push(`rooms/${newRoom._id}`));
};
const deleteRoom = ( {meta, id} ) => {
	const room = meta.tetris.deleteRoom(id, meta.player);
	if ( room ) {
		meta.io.emit('action', actions.deleteRoom(id));
	}
};
const joinRoom = ( {meta, id} ) => {
	const room = meta.tetris.joinRoom(id, meta.player);
	if ( room ) {
		meta.io.emit('action', actions.updateRoom(room));
		meta.player.socket.emit('action', push(`rooms/${room._id}`));
	}
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
		default:
			return;
	}
}
