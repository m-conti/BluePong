import dispatchDefault from './default';
import dispatchRooms from './rooms';
import dispatchTetris from './tetris';

export default (action) => {
	dispatchDefault(action);
	dispatchRooms(action);
	dispatchTetris(action);
}
