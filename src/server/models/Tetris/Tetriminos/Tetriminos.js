
class Tetriminos {
	constructor() {
		this.value = 0;
	}

	get rotations() {
		return [new Array(4).fill(true).map(() => Array(4).fill(0))];
	}

	serialize() {
		return {
			piece: this.rotations[0],
			value: this.value,
		}
	}
}

export default Tetriminos;
