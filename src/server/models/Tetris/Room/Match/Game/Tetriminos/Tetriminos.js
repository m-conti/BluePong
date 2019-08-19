class Tetriminos {
	construction() {
		this.shape = Array(4).fill(false).map(() => Array(4).fill(false));
		this.value = 0;
		this.rotationIndex = 0;
	}

	static rotations = Array(4).fill(false).map(() => Array(4).fill(false));

	rotate() {
		this.rotationIndex = (this.rotationIndex + 1) % this.rotations.length;
		this.shape = this.rotations[this.rotationIndex];
	}

	get figure() {
		return this.shape.map((row) => row.map((elem) => elem ? this.value : 0 ))
	}
}

export const generateTetriminos = () => {

};

export default Tetriminos;
