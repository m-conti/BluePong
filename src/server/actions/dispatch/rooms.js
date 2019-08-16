import * as actionTypes from '../../../actions/actionTypes/socket';

export default function ( action ) {

	switch ( action.type ) {
		case actionTypes.PING:
			action.player.socket.emit('action', {type: actionTypes.PONG});
			break;
		case actionTypes.PONG:
			console.error('ERROR : pong call on server side');
			break;
		default:
			return;
	}
}
