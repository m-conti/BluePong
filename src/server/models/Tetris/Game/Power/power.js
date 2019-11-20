import { maxBy, minBy } from 'lodash';
import { TILE_BLOCK_VALUE } from '../../../../../constants/tetris';

class Power {
	constructor() {
		this.name = 'Power';
		this.description = 'it\'s a power';
		this.mode = 'unset';
	}

	use(game, nbLines) {
		return;
	}

	serialize() {
		return {
			name: this.name,
			description: this.description,
			mode: this.mode,
		}
	}
}

class RegularAddHandicapBest extends Power {
	constructor() {
		super();
		this.name = 'Challenge';
		this.description = 'add one handicap line to the best opponent';
		this.mode = 'regular';
	}

	use(game, nbLines) {
		if (!nbLines) { return; }
		const opponent = maxBy(game.opponents, (o) => o.score);
		if (!opponent) { return; }
		opponent.addHandicapLines(nbLines);
	}
}

class RegularAddHandicapWorst extends Power {
	constructor() {
		super();
		this.name = 'Bully';
		this.description = 'add one handicap line to the wrost opponent';
		this.mode = 'regular';
	}

	use(game, nbLines) {
		if (!nbLines) { return; }
		const opponent = minBy(game.opponents, (o) => o.score);
		if (!opponent) { return; }
		opponent.addHandicapLines(nbLines);
	}
}

class RegularRemoveHandicapLines extends Power {
	constructor() {
		super();
		this.name = 'Restore';
		this.description = 'remove one of your handicap line';
		this.mode = 'regular';
	}

	use(game, nbLines) {
		if (!nbLines) { return; }
		const board = game.board;
		for (let i = 0; i < nbLines; i++) {
			if (board[board.length - 1] !== TILE_BLOCK_VALUE) { break; }
			game.removeLine(board.length - 1);
		}
	}
}

export const regularPowers = [
	new RegularAddHandicapBest(),
	new RegularAddHandicapWorst(),
	new RegularRemoveHandicapLines(),
];
