import socketIO from 'socket.io';
import { remove } from 'lodash';

import dispatch from '../../actions/dispatch/default';

import Player from '../Player/Player';
import Tetris from '../Tetris/Tetris';

class Sockets {
	constructor(http, origins) {
		this.io = socketIO(http, { pingTimeout: 60000, origins: origins });
		this.dispatch = dispatch;
		this.players = [];
		this.tetris = new Tetris();
	}

	getPlayer(socket) {
		return this.players.find((player) => player.socket === socket);
	}

	addPlayer(socket) {
		this.players.push(new Player(socket));
	}

	removePlayer(socket) {
		const player = this.getPlayer(socket);
		player.disconnect();
		remove(this.players, (p) => p === player);
	}

	listenToEvents() {
		this.io.on('connection', (socket) => {
			this.addPlayer(socket);
			socket.on('action', (action) => {
				action.meta.player = this.getPlayer(socket);
				action.meta.io = this.io;
				action.meta.tetris = this.tetris;
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
