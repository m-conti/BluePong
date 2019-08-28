import Game from '../Game/Game';
import generateTetriminos from '../Tetriminos/generateTetriminos';
import {setOpponents} from '../../../actions/client/game'

class Match {
	constructor() {
		this.games = [];
		this.tetriminos = [];
	}

	init(players) {
		this.tetriminos.push(generateTetriminos());
		this.games = players.map((player) => new Game(player, this.tetriminos));
		this.games.forEach((game) => {
			const opponentsGames = this.games.filter((g) => g !== game);
			game.opponents = opponentsGames;
			const opponents = opponentsGames.map((o) => o.serializeAsOpponent());
			game.player.socket.emit('action', setOpponents(opponents));
		});
	}

	start() {

	}
}

export default Match;
