import * as actionTypes from '../../../actions/actionTypes/socket';

export default function ( action ) {

	switch ( action.type ) {
		case actionTypes.PING:
			action.meta.player.socket.emit('action', {type: actionTypes.PONG});
			break;
		case actionTypes.PONG:
			throw new Error('Pong call on server side');
			break;
		default:
			return;
	}
}

