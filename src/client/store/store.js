// Redux
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// Middleware
import thunkMiddleware from 'redux-thunk';
import socketMiddleware from 'redux-socket.io-middleware';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from '../routes/history';

// Reducers
import userReducer from './reducers/user';
import tetrisReducer from './reducers/tetris';
import roomsReducer from './reducers/rooms';
import notifierReducer from './reducers/notifier';
import socketReducer, { socket } from './reducers/sockets';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
	user: userReducer,
	tetris: tetrisReducer,
	rooms: roomsReducer,
	notifier: notifierReducer,
	io: socketReducer,
	router: connectRouter(history),
});


export default createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(
			thunkMiddleware,
			socketMiddleware(socket),
			routerMiddleware(history)
		)
	)
);
