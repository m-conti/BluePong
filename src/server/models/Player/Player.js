import { omit } from 'lodash';

class Player {
	constructor( socket, id ) {
		this.socket = socket;
		this.isAdmin = false;
		this._id = id;
		console.log('CONNECT');
	}

	serialize() {
		return omit(this, ['socket', 'token']);
	}

	join( room ) {
		console.log('JOIN', room._id);
	}

	leave( room ) {
		console.log('LEAVE', room._id);
	}

	disconnect() {
		console.log('DISCONNECT');
	}
}

export default Player;
