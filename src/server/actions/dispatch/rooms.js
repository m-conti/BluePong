import * as actionTypes from '../../../actions/actionTypes/room';

export default function ( action ) {

	switch ( action.type ) {
		case actionTypes.SERVER_CREATE_ROOM:
			action.meta.tetris.addRoom(action.room, action.meta.player);
			break;
		case actionTypes.SERVER_DELETE_ROOM:
			break;
		case actionTypes.SERVER_JOIN_ROOM:
			break;
		default:
			return;
	}
}
