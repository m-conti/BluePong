import { omit } from 'lodash';

import sockets from '../Sockets/Sockets';

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

	join( room ) {
		if ( this.room ) throw new Error(`player can't join '${room.name}' cause he's already in '${this.room.name}' `);
		room.addPlayer(this);
		this.room = room;
	}

	leave( room ) {
		if ( this.room !== room ) return;
		this.room = null;
		console.log('LEAVE', room._id);
	}

	disconnect() {
		console.log('DISCONNECT');
		sockets.removePlayer(this);
	}
}

export default Player;
