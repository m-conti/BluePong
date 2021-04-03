// Redux
import { createStore, applyMiddleware, compose } from 'redux';

// Middleware
import thunkMiddleware from 'redux-thunk';
import socketMiddleware from 'redux-socket.io-middleware';
import { routerMiddleware } from 'connected-react-router';
import history from '../routes/history';
import { socket } from './reducers/sockets';

// Reducers
import { reducers } from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(
			thunkMiddleware,
			socketMiddleware(socket),
			routerMiddleware(history)
		)
	)
);


export default store;
