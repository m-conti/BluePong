import { remove } from 'lodash';
import { MAX_PLAYERS, MAX_VIEWERS } from '../../../../constants/tetris';

class Room {
	constructor( id, name, options ) {
		this.id = id;
		this.name = name;

		this.creationTime = Date.now();
		this.endingTime = null;

		this.maxPlayers = options.maxPlayers || MAX_PLAYERS;
		this.maxViewers = options.maxViewers || MAX_VIEWERS;

		this.players = [];
		this.viewers = [];

		this.isPlaying = false;
		this.isDone = false;
	}

	closeRoom() {
		// remove all players and make them leave
		this.players.forEach(( player ) => this.kickPlayer(player));
		// remove all viewers and make them leave
		this.viewers.forEach(( viewer ) => this.kickViewer(viewer));
	}

	addPlayer( player ) {
		player.join(this);
		this.players.push(player);
	}

	addViewer( viewer ) {
		viewer.join(this);
		this.viewers.push(viewer);
	}

	kickPlayer( player ) {
		player.leave(this);
		remove(this.players, ( p ) => p === player);
	}

	kickViewer( viewer ) {
		viewer.leave(this);
		remove(this.viewers, ( v ) => v === viewer);
	}
}

export default Room;
