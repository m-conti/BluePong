import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../routes/history';

import userReducer from './user';
import tetrisReducer from './tetris';
import roomsReducer from './rooms';
import notifierReducer from './notifier';
import socketReducer from './sockets';

export const reducers = combineReducers({
	user: userReducer,
	tetris: tetrisReducer,
	rooms: roomsReducer,
	notifier: notifierReducer,
	io: socketReducer,
	router: connectRouter(history),
});