import dispatchDefault from './default';
import dispatchRooms from './rooms';

export default (action) => {
	dispatchDefault(action);
	dispatchRooms(action);
}
