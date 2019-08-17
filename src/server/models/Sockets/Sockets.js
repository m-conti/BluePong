import socketIO from 'socket.io';
import { remove } from 'lodash';

import * as actions from '../../actions/client/user';

import dispatch from '../../actions/dispatch/dispatch';

import Player from '../Player/Player';
import Tetris from '../Tetris/Tetris';
import generateId from '../../../helpers/utilities/generateId';

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
		const player = new Player(socket, generateId(this.players));
		this.players.push(player);
		return player;
	}

	removePlayer(socket) {
		const player = this.getPlayer(socket);
		player.disconnect();
		remove(this.players, (p) => p === player);
	}

	listenToEvents() {
		this.io.on('connection', (socket) => {
			const player = this.addPlayer(socket);

			socket.emit('action', actions.updateUser(player));

			socket.on('action', (action) => {
				console.log(action);
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
