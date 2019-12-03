import Game from '../Game/Game';
import generateTetriminos from '../Tetriminos/generateTetriminos';
import { setOpponents, matchIsOver } from '../../../actions/client/game';

class Match {
	constructor(room) {
		this.games = [];
		this.tetriminos = [];
		this.room = room;
	}

	init(players) {
		this.tetriminos = [];
		this.tetriminos.push(generateTetriminos());
		this.games = players.map((player) => new Game(player, this));
		this.games.forEach((game) => {
			const opponentsGames = this.games.filter((g) => g !== game);
			game.opponents = opponentsGames;
			const opponents = opponentsGames.map((o) => o.serializeAsOpponent());
			game.player.socket.emit('action', setOpponents(opponents));
		});
	}

	start() {

	}

	end() {
		this.games.forEach((game) => {
			const opponents = game.opponents.map((o) => o.serializeAsOpponent());
			game.player.socket.emit('action', matchIsOver(opponents));
		});
		this.room.isDone = true;
		this.room.update();
	}

	checkEnd() {
		let end = this.games.length;
		let game = null;
		for (let i = 0; i < this.games.length; ++i) {
			if (this.games[i].over) {
				end--;
			}
			else { game = this.games[i]}
		}
		if (end === 1) { game.gameOver(); }
		if (!end) { this.end(); }
	}

}

export default Match;
