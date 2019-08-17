class Player {
	constructor( socket ) {
		this.socket = socket;
		this.isAdmin = false;
		console.log('CONNECT');
	}

	serialize() {
		return {
			isAdmin: this.isAdmin,
		}
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
