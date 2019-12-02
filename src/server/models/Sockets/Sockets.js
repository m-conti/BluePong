import socketIO from 'socket.io';
import { remove } from 'lodash';

import * as userActions from '../../actions/client/user';
import * as notifierActions from '../../actions/client/notifier';
import dispatch from '../../actions/dispatch/dispatch';

import Player from '../Player/Player';
import Tetris from '../Tetris/Tetris';
import generateId from '../../../helpers/utilities/generateId';
import SocketSimulator from '../../tests/simulators/socket';

class Sockets {
	constructor() {
		this.io = null;
		this.dispatch = dispatch;
		this.players = [];
		this.tetris = new Tetris();
	}

	simulate() {
		this.io = new SocketSimulator();
	}

	simulateAction( player, action ) {
		action.meta.player = player;
		this.dispatch(action);
	}

	getPlayer( socket ) {
		return this.players.find(( player ) => player.socket === socket);
	}

	getPlayerById( id ) {
		return this.players.find(( player ) => player._id === id);
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

			socket.emit('action', userActions.updateUser(player));

			socket.on('action', ( action ) => {
				console.log(action);
				try {
					action.meta.player = this.getPlayer(socket);
					this.dispatch(action);
				}
				catch ( error ) {
					console.error(error);
					socket.emit('action', notifierActions.displayNotification({
						message: error.message,
						status: 'error',
					}));
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
