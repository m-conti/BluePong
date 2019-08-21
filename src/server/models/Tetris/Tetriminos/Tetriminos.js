
class Tetriminos {
	constructor() {
		this.value = 0;
		this.rotationIndex = 0;
	}

	static get rotations() {
		return Array(4).fill(false).map(() => Array(4).fill(false));
	}

	get shape() {
		return Tetriminos.rotations[this.rotationIndex % Tetriminos.rotations.length];
	}

	rotate() {
		this.rotationIndex++;
	}

	get figure() {
		return this.shape.map(( row ) => row.map(( elem ) => elem ? this.value : 0));
	}
}

export default Tetriminos;
