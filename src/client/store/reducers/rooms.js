import * as actions from '../../../actions/actionTypes/rooms';

const initialState = {};


const updateRooms = (state, {rooms}) => {

};
const addRoom = () => {

};
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
