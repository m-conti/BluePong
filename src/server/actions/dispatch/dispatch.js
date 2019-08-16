import dispatchDefault from './default';
import dispatchRoom from './rooms';
import dispatchTetris from './tetris';

export default (action) => {
	dispatchDefault(action);
	dispatchRoom(action);
	dispatchTetris(action);
}
