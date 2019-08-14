import socketIO from 'socket.io';
import { remove } from 'lodash';

import dispatch from '../../actions/dispatch/default';

import Player from '../Player/Player';

class Sockets {
	constructor(http, origins) {
		this.io = socketIO(http, { pingTimeout: 60000, origins: origins });
		this.dispatch = dispatch;
		this.players = [];
	}

	addPlayer(socket) {
		this.players.push(new Player(socket));
	}

	removePlayer(socket) {
		const player = this.players.find((player) => player.socket === socket);
		player.disconnect();
		remove(this.players, (p) => p === player);
	}

	listenToEvents() {
		this.io.on('connection', (socket) => {
			this.addPlayer(socket);
			socket.on('action', (action) => {
				console.log(action);
				action.io = this.io;
				action.player = this.players.find((player) => player.socket === socket);
				this.dispatch(action);
			});

			socket.on('disconnect', () => {
				console.log('socket Disconnected');
				this.removePlayer(socket);
			});
		});
	}
}

export default Sockets;
