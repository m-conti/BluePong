import { I, O, T, J, L, S, Z } from './Forms/Forms';
const Tetriminos = [I, O, T, J, L, S, Z];

export default () => {
	return O.create();
	return Tetriminos[Math.floor(Math.random() * Tetriminos.length)].create();
};
