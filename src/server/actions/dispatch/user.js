import * as actionTypes from '../../../actions/actionTypes/user';
import * as actions from '../client/user';


const setName = ( {meta: {player}, name } ) => {
	player.setName(name);
	player.socket.emit('action', actions.updateUser(player));
};

export default function( action ) {
	switch ( action.type ) {
		case actionTypes.SERVER_SET_NAME:
			return setName(action);
		default:
			return;
	}
}
