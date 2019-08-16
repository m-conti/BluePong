class Player {
	constructor( socket ) {
		this.socket = socket;
		this.isAdmin = false;
		console.log('CONNECT');
	}

	join( room ) {
		console.log('JOIN', room);
	}

	leave( room ) {
		console.log('LEAVE', room);
	}

	disconnect() {
		console.log('DISCONNECT');
	}
}

export default Player;
