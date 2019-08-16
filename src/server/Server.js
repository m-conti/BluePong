import http from 'http';
import express from 'express';
import Sockets from './models/Sockets/Sockets';

class Server {
	constructor(location, origins=null) {
		this.location = location;
		this.app = express();
		this.http = http.createServer(this.app);
		this.sockets = new Sockets(this.http, origins.url);
	}

	listen(cb) {
		this.sockets.listenToEvents();
		this.http.listen(this.location.port, this.location.host, () => {
			process.stdout.write(`Listening on ${this.location.url}\n`);
			if (cb) cb(this);
		});
	}
}

export default Server;
