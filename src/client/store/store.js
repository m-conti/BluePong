// Redux
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// Middleware
import thunkMiddleware from 'redux-thunk';
import socketMiddleware from 'redux-socket.io-middleware';

// Reducers
import tetrisReducer from './reducers/tetris';
import socketReducer, { socket } from './reducers/sockets';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
	tetris: tetrisReducer,
	io: socketReducer,
});


export default createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(
			thunkMiddleware,
			socketMiddleware(socket)
		)
	)
);
