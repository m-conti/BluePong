import {remove, omit, isEqual} from 'lodash';
import {MAX_PLAYERS, MAX_VIEWERS} from '../../../../constants/tetris';

import sockets from '../../Sockets/Sockets';
import * as actions from '../../../actions/client/rooms';

import Match from '../Match/Match';

class Room {
	constructor(id, name, {maxPlayers, maxViewers}) {
		this._id = id;
		this.name = name;

		this.creationTime = Date.now();
		this.endingTime = null;

		this.maxPlayers = maxPlayers || MAX_PLAYERS;
		this.maxViewers = maxViewers || MAX_VIEWERS;

		this.match = new Match();

		this.players = [];
		this.viewers = [];

		this.master = null;

		this.isPlaying = false;
		this.isDone = false;
	}

	delete() {
		console.log(`DELETE ROOM : ${this._id}`);
		this.players.forEach((player) => player.leave(this));
		sockets.tetris.removeRoom(this._id);
	}

	serialize() {
		const obj = omit(this, ['players', 'viewers', 'master', 'match']);
		obj.players = this.players.map((player) => player.serialize());
		obj.viewers = this.viewers.map((viewer) => viewer.serialize());
		obj.master = this.master ? this.master.serialize() : null;
		return obj;
	}

	// Players
	canJoin() {
		return this.players.length < this.maxPlayers;
	}

	addPlayer(player) {
		if (!this.canJoin()) throw new Error(`'${this.name}' can't accept mor players.`);
		this.players.push(player);
		if (!this.master) this.master = player;
		sockets.io.emit('action', actions.updateRoom(this));
	}

	removePlayer(player) {
		remove(this.players, (p) => p === player);
		if (!this.players.length) return this.delete();
		if (this.master === player) this.master = this.players[0];
		sockets.io.emit('action', actions.updateRoom(this));
	}


	// Match
	startMatch() {
		this.match.init(this.players);
		this.isPlaying = true;
		sockets.io.emit('action', actions.updateRoom(this));
		this.match.start();
	}
}

export default Room;
