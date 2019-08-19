import Tetriminos from '../Tetriminos';
import { I_rotations, O_rotations, T_rotations, J_rotations, L_rotations, S_rotations, Z_rotations } from './rotations';

export class I extends Tetriminos {
	constructor() {
		super();
		this.shape = this.rotations[this.rotationIndex];
		this.value = 1;
	}
}
I.rotations = I_rotations;

export class O extends Tetriminos {
	constructor() {
		super();
		this.shape = this.rotations[this.rotationIndex];
		this.value = 2;
	}
}
O.rotations = O_rotations;

export class T extends Tetriminos {
	constructor() {
		super();
		this.shape = this.rotations[this.rotationIndex];
		this.value = 3;
	}
}
T.rotations = T_rotations;

export class J extends Tetriminos {
	constructor() {
		super();
		this.shape = this.rotations[this.rotationIndex];
		this.value = 4;
	}
}
J.rotations = J_rotations;

export class L extends Tetriminos {
	constructor() {
		super();
		this.shape = this.rotations[this.rotationIndex];
		this.value = 5;
	}
}
L.rotations = L_rotations;

export class S extends Tetriminos {
	constructor() {
		super();
		this.shape = this.rotations[this.rotationIndex];
		this.value = 6;
	}
}
S.rotations = S_rotations;

export class Z extends Tetriminos {
	constructor() {
		super();
		this.shape = this.rotations[this.rotationIndex];
		this.value = 7;
	}
}
Z.rotations = Z_rotations;
