import socketIO from 'socket.io';

import dispatch from '../../actions/dispatch/default';


class Sockets {
	constructor(http, origins) {
		this.io = socketIO(http, { pingTimeout: 60000, origins: origins });
		this.dispatch = dispatch;
	}

	listenToEvents() {
		this.io.on('connection', (socket) => {
			socket.on('action', (action) => {
				console.log(action);
				action.io = this.io;
				action.socket = socket;
				this.dispatch(action);
			});
		});
	}
}

export default Sockets;
