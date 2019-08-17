import { remove, pick } from 'lodash';
import { MAX_PLAYERS, MAX_VIEWERS } from '../../../../constants/tetris';

import sockets from '../../Sockets/Sockets';

class Room {
	constructor( id, name, {maxPlayers, maxViewers} ) {
		this._id = id;
		this.name = name;

		this.creationTime = Date.now();
		this.endingTime = null;

		this.maxPlayers = maxPlayers || MAX_PLAYERS;
		this.maxViewers = maxViewers || MAX_VIEWERS;

		this.players = [];
		this.viewers = [];

		this.master = null;

		this.isPlaying = false;
		this.isDone = false;
	}

	delete() {
		console.log(`DELETE ROOM : ${this._id}`);
		remove(sockets.tetris.rooms, ( r ) => r === this);
	}

	serialize() {
		const obj = pick(this, ['_id', 'name', 'creationTime', 'endingTime', 'maxPlayers', 'maxViewers', 'isPlaying', 'isDone']);
		obj.players = this.players.map(( player ) => player.serialize());
		obj.viewers = this.viewers.map(( viewer ) => viewer.serialize());
		obj.master = this.master ? this.master.serialize() : null;
		return obj;
	}

	// Play
	canJoin() {
		return this.players.length < this.maxPlayers;
	}
	addPlayer(player) {
		if (!this.canJoin()) throw new Error(`'${this.name}' can't accept mor players.`);
		this.players.push(player);
		if (!this.master) this.master = player;
	}
	removePlayer(player) {
		remove(this.players, (p) => p === player);
		if (!this.players.length) return this.delete();
		if (this.master === player) this.master = this.players[0];
	}
}

export default Room;
