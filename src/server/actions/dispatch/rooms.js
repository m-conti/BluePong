import * as actionTypes from '../../../actions/actionTypes/rooms';
import * as actions from '../client/rooms';

// /!\ serializer room and user before sending them to client

const getRooms = ( {meta} ) => {
	meta.player.socket.emit('action', actions.updateRooms(meta.tetris.rooms));
};
const createRoom = ( {meta, room} ) => {
	const newRoom = meta.tetris.addRoom(room, meta.player);
	meta.io.emit('action', actions.addRoom(newRoom));
};
const deleteRoom = ( {meta, id} ) => {
	meta.tetris.deleteRoom(id, meta.player);
	meta.io.emit(actionTypes.CLIENT_DELETE_ROOM, actions.deleteRoom(id));
};
const joinRoom = ( {meta, id} ) => {
	meta.tetris.joinRoom(id, meta.player);
};


export default function ( action ) {

	switch ( action.type ) {
		case actionTypes.SERVER_GET_ROOMS:
			return getRooms(action);
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
