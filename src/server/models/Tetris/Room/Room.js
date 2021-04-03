import { remove, omit } from 'lodash';
import { MAX_PLAYERS, MAX_VIEWERS } from '../../../../constants/tetris';

import sockets from '../../Sockets/Sockets';
import * as actions from '../../../actions/client/rooms';

import Match from '../Match/Match';
import {resetTetrisState} from "../../../actions/client/game";

class Room {
	constructor( id, name, {playerMax, ViewerMax} ) {
		this._id = id;
		this.name = name;

		this.creationTime = Date.now();
		this.endingTime = null;

		this.maxPlayers = playerMax || MAX_PLAYERS;
		this.maxViewers = ViewerMax || MAX_VIEWERS;

		this.match = new Match(this);

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

	reset() {
		this.match = new Match(this);
		this.readyState = new Array(this.maxPlayers).fill(false);
		this.isPlaying = false;
		this.isDone = false;
		this.update();
	}

	restart() {
		if (!this.isPlaying) throw new Error('Match hasn\'t started before');
		if (!this.isDone) throw new Error('Match isn\'t done');
		this.reset();
		this.players.forEach((player) => {
			player.socket.emit('action', resetTetrisState());
		});
	}

	update() {
		sockets.io.emit('action', actions.updateRoom(this));
	}

	delete() {
		sockets.tetris.removeRoom(this._id);
		[...this.players].forEach(( player ) => player.leave(this));
		this.match.games.forEach((game) => {
			clearInterval(game.gravityLoop);
		});
		sockets.io.emit('action', actions.updateRooms(sockets.tetris.rooms));
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
		return (this.players.length < this.maxPlayers) && !this.isPlaying;
	}

	addPlayer( player ) {
		if ( !this.canJoin() ) throw new Error(`'${this.name}' can't accept mor players.`);
		this.players.push(player);
		if ( !this.master ) this.master = player;
		this.readyState.fill(false);
		this.update();
	}

	removePlayer( player ) {
		remove(this.players, ( p ) => p === player);
		if ( !this.players.length ) {
			try {
				sockets.tetris.getRoom(this._id);
				return this.delete();
			}
			catch ( error ) { return; }
		}
		if ( this.master === player ) this.master = this.players[0];
		this.readyState.fill(false);
		this.update();
	}

	togglePlayerReady(player) {
		const idx = this.players.findIndex((p) => p === player);
		this.readyState[idx] = !this.readyState[idx];
		this.update();
	}

	// Match
	startMatch() {
		this.match.init(this.players);
		this.isPlaying = true;
		this.update();
		this.match.start();
	}
}

export default Room;
