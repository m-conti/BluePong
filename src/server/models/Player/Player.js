import { omit } from 'lodash';

import sockets from '../Sockets/Sockets';
import { updateUser } from '../../actions/client/user';

class Player {
	constructor( socket, id ) {
		this.socket = socket;
		this.isAdmin = false;
		this._id = id;
		this.room = null;
		console.log('CONNECT');
	}

	serialize() {
		return omit(this, ['socket', 'token', 'room']);
	}

	serializeMe() {
		const me = this.serialize();
		me.roomId = this.room ? this.room._id : null;
		return me;
	}

	getGame() {
		if ( !this.room || !this.room.isPlaying ) return null;
		return this.room.match.games.find((game) => game.player === this);
	}

	join( room ) {
		if ( room && this.room === room ) throw new Error(`player is already in '${room.name}' `);
		if ( this.room ) throw new Error(`player can't join '${room.name}' cause he's already in '${this.room.name}' `);
		room.addPlayer(this);
		this.room = room;
		this.socket.emit('action', updateUser(this));
	}

	leave( room ) {
		if ( this.room !== room ) return;
		this.room = null;
		this.socket.emit('action', updateUser(this));
		console.log('LEAVE', room._id);
	}

	disconnect() {
		console.log('DISCONNECT');
		if ( this.room ) this.room.removePlayer(this);
		sockets.removePlayer(this);
	}
}

export default Player;
