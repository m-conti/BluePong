import socketIO from 'socket.io';
import { remove } from 'lodash';

import * as actions from '../../actions/client/user';

import dispatch from '../../actions/dispatch/dispatch';

import Player from '../Player/Player';
import Tetris from '../Tetris/Tetris';
import generateId from '../../../helpers/utilities/generateId';

class Sockets {
	constructor() {
		this.io = null;
		this.dispatch = dispatch;
		this.players = [];
		this.tetris = new Tetris();
	}

	getPlayer( socket ) {
		return this.players.find(( player ) => player.socket === socket);
	}
	addPlayer( socket ) {
		const player = new Player(socket, generateId(this.players));
		this.players.push(player);
		return player;
	}
	removePlayer( player ) {
		remove(this.players, ( p ) => p === player);
	}

	listenToEvents( http, origins ) {
		this.io = socketIO(http, {pingTimeout: 10000, origins: origins});

		this.io.on('connection', ( socket ) => {
			const player = this.addPlayer(socket);

			socket.emit('action', actions.updateUser(player));

			socket.on('action', ( action ) => {
				try {
					action.meta.player = this.getPlayer(socket);
					this.dispatch(action);
				}
				catch ( error ) {
					console.error(error.message);
				}
			});

			socket.on('disconnect', () => {
				this.getPlayer(socket).disconnect();
			});
		});
	}
}

const sockets = new Sockets();

export default sockets;
