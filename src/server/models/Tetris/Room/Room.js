import { remove, omit, isEqual } from 'lodash';
import { MAX_PLAYERS, MAX_VIEWERS } from '../../../../constants/tetris';

import sockets from '../../Sockets/Sockets';
import * as actions from '../../../actions/client/rooms';

import Match from '../Match/Match';

class Room {
	constructor( id, name, {maxPlayers, maxViewers} ) {
		this._id = id;
		this.name = name;

		this.creationTime = Date.now();
		this.endingTime = null;

		this.maxPlayers = maxPlayers || MAX_PLAYERS;
		this.maxViewers = maxViewers || MAX_VIEWERS;

		this.match = new Match();

		this.players = [];
		this.viewers = [];
		this.readyState = new Array(this.maxPlayers).fill(false);

		this.master = null;

		this.isPlaying = false;
		this.isDone = false;
	}
	get canLaunch() {
		return this.readyState.slice(0, this.players.length).every((val) => val);
	}

	delete() {
		console.log(`DELETE ROOM : ${this._id}`);
		this.players.forEach(( player ) => player.leave(this));
		sockets.tetris.removeRoom(this._id);
	}

	serialize() {
		const obj = omit(this, ['players', 'viewers', 'master', 'match']);
		obj.players = this.players.map(( player, key ) => {
			const ret = player.serialize();
			ret['isReady'] = this.readyState[key];
			return ret;
		});
		obj.viewers = this.viewers.map(( viewer ) => viewer.serialize());
		obj.master = this.master ? this.master.serialize() : null;
		obj.canLaunch = this.canLaunch;
		return obj;
	}

	// Players
	canJoin() {
		return this.players.length < this.maxPlayers;
	}

	addPlayer( player ) {
		if ( !this.canJoin() ) throw new Error(`'${this.name}' can't accept mor players.`);
		this.players.push(player);
		if ( !this.master ) this.master = player;
		this.readyState.fill(false);
		sockets.io.emit('action', actions.updateRoom(this));
	}

	removePlayer( player ) {
		remove(this.players, ( p ) => p === player);
		if ( !this.players.length ) return this.delete();
		if ( this.master === player ) this.master = this.players[0];
		this.readyState.fill(false);
		sockets.io.emit('action', actions.updateRoom(this));
	}

	togglePlayerReady(player) {
		const idx = this.players.findIndex((p) => p === player);
		this.readyState[idx] = !this.readyState[idx];
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
