import { remove, pick } from 'lodash';
import { MAX_PLAYERS, MAX_VIEWERS } from '../../../../constants/tetris';

class Room {
	constructor( id, name, options ) {
		this._id = id;
		this.name = name;

		this.creationTime = Date.now();
		this.endingTime = null;

		this.maxPlayers = options.maxPlayers || MAX_PLAYERS;
		this.maxViewers = options.maxViewers || MAX_VIEWERS;

		this.players = [];
		this.viewers = [];

		this.master = null;

		this.isPlaying = false;
		this.isDone = false;
	}

	serialize() {
		const obj = pick(this, ['_id', 'name', 'creationTime', 'endingTime', 'maxPlayers', 'maxViewers', 'isPlaying', 'isDone']);
		obj.players = this.players.map(( player ) => player.serialize());
		obj.viewers = this.viewers.map(( viewer ) => viewer.serialize());
		obj.master = this.master ? this.master.serialize() : null;
		return obj;
	}

	closeRoom() {
		// remove all players and make them leave
		this.players.forEach(( player ) => this.kickPlayer(player));
		// remove all viewers and make them leave
		this.viewers.forEach(( viewer ) => this.kickViewer(viewer));
	}

	getPlayer( player ) {
		return this.players.find(( p ) => p === player);
	}

	addPlayer( player ) {
//		if ( this.getPlayer(player) ) return;
		player.join(this);
		this.players.push(player);
		if ( !this.master ) {
			this.master = player;
		}
	}

	addViewer( viewer ) {
		viewer.join(this);
		this.viewers.push(viewer);
	}

	kickPlayer( player ) {
		player.leave(this);
		remove(this.players, ( p ) => p === player);
		if ( this.master === player ) {
			this.master = this.players.length ? this.players[0] : null;
		}
	}

	kickViewer( viewer ) {
		viewer.leave(this);
		remove(this.viewers, ( v ) => v === viewer);
	}
}

export default Room;
