class Player {
	constructor( socket ) {
		this.socket = socket;
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
