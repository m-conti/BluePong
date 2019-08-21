import Tetriminos from '../Tetriminos';
import { I_rotations, O_rotations, T_rotations, J_rotations, L_rotations, S_rotations, Z_rotations } from './rotations';

export class I extends Tetriminos {
	constructor() {
		super();
		this.value = 1;
	}
	static create() {
		return new I();
	}
	static get rotations() {
		return I_rotations;
	}
	get shape() {
		return I.rotations[this.rotationIndex % I.rotations.length];
	}
}

export class O extends Tetriminos {
	constructor() {
		super();
		this.value = 2;
	}
	static create() {
		return new O();
	}
	static get rotations() {
		return O_rotations;
	}
	get shape() {
		return O.rotations[this.rotationIndex % O.rotations.length];
	}
}

export class T extends Tetriminos {
	constructor() {
		super();
		this.value = 3;
	}
	static create() {
		return new T();
	}
	static get rotations() {
		return T_rotations;
	}
	get shape() {
		return T.rotations[this.rotationIndex % T.rotations.length];
	}
}

export class J extends Tetriminos {
	constructor() {
		super();
		this.value = 4;
	}
	static create() {
		return new J();
	}
	static get rotations() {
		return J_rotations;
	}
	get shape() {
		return J.rotations[this.rotationIndex % J.rotations.length];
	}
}

export class L extends Tetriminos {
	constructor() {
		super();
		this.value = 5;
	}
	static create() {
		return new L();
	}
	static get rotations() {
		return L_rotations;
	}
	get shape() {
		return L.rotations[this.rotationIndex % L.rotations.length];
	}
}


export class S extends Tetriminos {
	constructor() {
		super();
		this.value = 6;
	}
	static create() {
		return new S();
	}
	static get rotations() {
		return S_rotations;
	}
	get shape() {
		return S.rotations[this.rotationIndex % S.rotations.length];
	}
}

export class Z extends Tetriminos {
	constructor() {
		super();
		this.value = 7;
	}
	static create() {
		return new Z();
	}
	static get rotations() {
		return Z_rotations;
	}
	get shape() {
		return Z.rotations[this.rotationIndex % Z.rotations.length];
	}
}

