import remote from './remote';
import * as actions from '../../../../actions/actionTypes/rooms';

export const getRooms = () => ({
	meta: remote,
	type: actions.SERVER_GET_ROOMS,
});

export const createRoom = ( room ) => ({
	meta: remote,
	type: actions.SERVER_CREATE_ROOM,
	room: room,
});

export const deleteRoom = ( id ) => ({
	meta: remote,
	type: actions.SERVER_DELETE_ROOM,
	id: id,
});

export const joinRoom = ( id ) => ({
	meta: remote,
	type: actions.SERVER_JOIN_ROOM,
	id: id,
});

export const toggleReady = () => ({
	meta: remote,
	type: actions.SERVER_READY_TOGGLE,
});

export const leaveRoom = ( id ) => ({
	meta: remote,
	type: actions.SERVER_LEAVE_ROOM,
	id: id,
});
