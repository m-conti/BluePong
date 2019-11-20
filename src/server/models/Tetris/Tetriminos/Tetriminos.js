
class Tetriminos {
	constructor() {
		this.value = 0;
	}

	static get rotations() {
		return Array(4).fill(false).map(() => Array(4).fill(false));
	}

	serialize() {
		return {
			piece: this.rotations[0],
			value: this.value,
		}
	}
}

export default Tetriminos;
