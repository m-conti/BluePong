import { location } from '../../../params';
import socketIOClient from 'socket.io-client';

import * as actionType from '../../../actions/actionTypes/socket';
import { get } from 'lodash';

export const socket = socketIOClient(location.server.url);

const initialState = {
	socket: socket,
};


const sockets = ( state = initialState, action ) => {
	if (get(action, 'meta.remote')) return state;

	switch ( action.type ) {
		case actionType.PONG:
			console.log('PONG');
			break;
		case actionType.PING:
			console.error('ERROR : ping call on client side');
			break;
		default :
			break;
	}
	return state;
};

export default sockets;
