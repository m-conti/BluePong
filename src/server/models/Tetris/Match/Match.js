import Game from '../Game/Game';

class Match {
	constructor() {
		this.games = null;
		this.tetriminos = [];
	}

	init(players) {
		this.games = players.map((player) => new Game(player, this.tetriminos));
	}

	start() {

	}
}

export default Match;
