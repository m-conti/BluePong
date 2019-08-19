import Tetriminos from '../Tetriminos';

export class I extends Tetriminos {
	constructor() {
		super();


	}

}

export class O extends Tetriminos {
	constructor() {
		super();
		this.shape = [
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		];
		this.value = 1;
	}

	static rotations = [
		[
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0]
		],
	];
}

export class T extends Tetriminos {
	constructor() {
		super();

	}
}

export class J extends Tetriminos {
	constructor() {
		super();

	}
}

export class L extends Tetriminos {
	constructor() {
		super();

	}
}

export class S extends Tetriminos {
	constructor() {
		super();

	}
}

export class Z extends Tetriminos {
	constructor() {
		super();

	}
}
