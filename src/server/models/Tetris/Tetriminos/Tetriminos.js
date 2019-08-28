
class Tetriminos {
	constructor() {
		this.value = 0;
	}

	static get rotations() {
		return Array(4).fill(false).map(() => Array(4).fill(false));
	}
}

export default Tetriminos;
