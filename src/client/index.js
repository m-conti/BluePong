import React from 'react';
import ReactDom from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Route
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store/store';

// App
import App from './containers/App';

const app = (
	<BrowserRouter>
		<Provider store={store}>
			<App/>
		</Provider>
	</BrowserRouter>
);

ReactDom.render(app, document.getElementById('tetris'));

serviceWorker.unregister();
