import * as actionTypes from '../../../actions/actionTypes/rooms';

export const updateRooms = (rooms) => ({
	type: actionTypes.CLIENT_UPDATE_ROOMS,
	rooms: rooms.map((room) => room.serialize()),
});
export const updateRoom = (room) => ({
	type: actionTypes.CLIENT_UPDATE_ROOM,
	room: room.serialize(),
});
