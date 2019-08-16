import { cloneDeep } from 'lodash';
import * as actions from '../../../actions/actionTypes/rooms';

const initialState = {
	rooms: null,
};


const updateRooms = ( state, {rooms} ) => ({
	...state,
	rooms: rooms,
});
const updateRoom = ( state, {room} ) => {
	const newRooms = cloneDeep(state.rooms);
	newRooms[state.rooms.findIndex((r) => r._id === room._id)] = room;
	return {
		...state,
		rooms: newRooms,
	};
};
const addRoom = ( state, {room} ) => ({
	...state,
	rooms: [...state.rooms, room],
});
const deleteRoom = ( state, {id} ) => ({
	...state,
	rooms: state.rooms.filter(( room ) => room.id !== id),
});


const rooms = ( state = initialState, action ) => {

	switch ( action.type ) {
		case actions.CLIENT_UPDATE_ROOMS:
			return updateRooms(state, action);
		case actions.CLIENT_UPDATE_ROOM:
			return updateRoom(state, action);
		case actions.CLIENT_ADD_ROOM:
			return addRoom(state, action);
		case actions.CLIENT_DELETE_ROOM:
			return deleteRoom(state, action);
		default :
			return state;
	}
};

export default rooms;
