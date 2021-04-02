import { omit } from 'lodash';

import sockets from '../Sockets/Sockets';
import { updateUser } from '../../actions/client/user';
import { resetTetrisState } from '../../actions/client/game';

class Player {
	constructor( socket, id ) {
		this.socket = socket;
		this.isAdmin = false;
		this._id = id;
		this.room = null;
		this.name = null;
	}

	setName( name ) {
		this.name = name;
	}

	serialize() {
		return omit(this, ['socket', 'room']);
	}

	serializeMe() {
		const me = this.serialize();
		me.roomId = this.room ? this.room._id : null;
		return me;
	}

	getGame() {
		const match = this.getMatch();
		if ( !match ) return null;
		return match.games.find((game) => game.player === this);
	}
	
	getMatch() {
		if ( !this.room || !this.room.isPlaying ) return null;
		return this.room.match;
	}

	join( room ) {
		if ( room && this.room === room ) throw new Error(`player is already in '${room.name}' `);
		if ( this.room ) throw new Error(`player can't join '${room.name}' cause he's already in '${this.room.name}' `);
		room.addPlayer(this);
		this.room = room;
		this.socket.emit('action', updateUser(this));
	}

	leave( room ) {
		if ( !room || !this.room ) { throw Error('player can\'t leave no room'); }
		if ( this.room !== room ) { throw Error(`player try to leave ${room.name} but he's in ${this.room.name}`); }
		this.room = null;
		room.removePlayer(this);
		this.socket.emit('action', updateUser(this));
		this.socket.emit('action', resetTetrisState());
	}

	disconnect() {
		if ( this.room ) this.room.removePlayer(this);
		sockets.removePlayer(this);
	}
}

export default Player;
