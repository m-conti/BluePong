import dispatchDefault from './default';
import dispatchRoom from './rooms';

export default (action) => {
	dispatchDefault(action);
	dispatchRoom(action);
}
