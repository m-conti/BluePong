import * as actionTypes from '../../../actions/actionTypes/rooms';


export const addRoom = (room) => ({
	type: actionTypes.CLIENT_ADD_ROOM,
	room: room,
});

export const deleteRoom = (id) => ({
	type: actionTypes.CLIENT_DELETE_ROOM,
	id: id,
});

export const updateRooms = (rooms) => ({
	type: actionTypes.CLIENT_UPDATE_ROOMS,
	rooms: rooms,
});
