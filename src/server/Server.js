import http from 'http';
import express from 'express';

import sockets from './models/Sockets/Sockets';

class Server {
	constructor(location, origins=null) {
		this.location = location;
		this.origins = origins;
		this.app = express();
		this.http = http.createServer(this.app);
		this.sockets = sockets;
	}

	listen(cb) {
		this.sockets.listenToEvents(this.http, this.origins.url);
		this.http.listen(this.location.port, this.location.host, () => {
			process.stdout.write(`Listening on ${this.location.url}\n`);
			if (cb) cb(this);
		});
	}
}

export default Server;
