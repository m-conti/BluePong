import React from 'react';
import ReactDom from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Route
import { ConnectedRouter } from 'connected-react-router';
import history from './routes/history';

// Redux
import { Provider } from 'react-redux';
import store from './store/store';

// App
import App from './containers/App';

// css init
import './index.css';

const app = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App/>
		</ConnectedRouter>
	</Provider>
);

ReactDom.render(app, document.getElementById('tetris'));

serviceWorker.unregister();
