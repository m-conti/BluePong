import Game from '../Game/Game';
import generateTetriminos from '../Tetriminos/generateTetriminos';

class Match {
	constructor() {
		this.games = null;
		this.tetriminos = [];
	}

	init(players) {
		this.tetriminos.push(generateTetriminos());
		this.games = players.map((player) => new Game(player, this.tetriminos));
	}

	start() {

	}
}

export default Match;
