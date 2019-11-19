import dispatchDefault from './default';
import dispatchRooms from './rooms';
import dispatchTetris from './tetris';
import dispatchUser from './user';

export default (action) => {
	dispatchDefault(action);
	dispatchRooms(action);
	dispatchTetris(action);
	dispatchUser(action);
}
