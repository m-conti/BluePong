import Tetriminos from '../Tetriminos';

import {
	TILE_I_VALUE,
	TILE_O_VALUE,
	TILE_T_VALUE,
	TILE_J_VALUE,
	TILE_L_VALUE,
	TILE_S_VALUE,
	TILE_Z_VALUE
} from '../../../../../constants/tetris';

import {
	I_rotations,
	O_rotations,
	T_rotations,
	J_rotations,
	L_rotations,
	S_rotations,
	Z_rotations
} from './rotations';

export class I extends Tetriminos {
	constructor() {
		super();
		this.value = TILE_I_VALUE;
	}
	static create() {
		return new I();
	}
	get rotations() {
		return I_rotations;
	}
}

export class O extends Tetriminos {
	constructor() {
		super();
		this.value = TILE_O_VALUE;
	}
	static create() {
		return new O();
	}
	get rotations() {
		return O_rotations;
	}
}

export class T extends Tetriminos {
	constructor() {
		super();
		this.value = TILE_T_VALUE;
	}
	static create() {
		return new T();
	}
	get rotations() {
		return T_rotations;
	}
}

export class J extends Tetriminos {
	constructor() {
		super();
		this.value = TILE_J_VALUE;
	}
	static create() {
		return new J();
	}
	get rotations() {
		return J_rotations;
	}
}

export class L extends Tetriminos {
	constructor() {
		super();
		this.value = TILE_L_VALUE;
	}
	static create() {
		return new L();
	}
	get rotations() {
		return L_rotations;
	}
}


export class S extends Tetriminos {
	constructor() {
		super();
		this.value = TILE_S_VALUE;
	}
	static create() {
		return new S();
	}
	get rotations() {
		return S_rotations;
	}
}

export class Z extends Tetriminos {
	constructor() {
		super();
		this.value = TILE_Z_VALUE;
	}
	static create() {
		return new Z();
	}
	get rotations() {
		return Z_rotations;
	}
}

