import * as actions from '../../../actions/actionTypes/rooms';

const initialState = {
	rooms: null,

};


const updateRooms = (state, {rooms}) => ({
	...state,
	rooms: rooms,
});
const addRoom = (state, {room}) => ({
	...state,
	rooms: [...state.rooms, room],
});
const deleteRoom = () => {

};


const rooms = ( state = initialState, action ) => {

	switch ( action.type ) {
		case actions.CLIENT_UPDATE_ROOMS:
			return updateRooms(state, action);
		case actions.CLIENT_ADD_ROOM:
			return addRoom(state, action);
		case actions.CLIENT_DELETE_ROOM:
			return deleteRoom(state, action);
		default :
			return state;
	}
};

export default rooms;
