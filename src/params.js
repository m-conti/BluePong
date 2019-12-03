
class Location {
	constructor({host, port}) {
		this.host = host;
		this.port = port;
	}
	get url() {
		return `http://${this.host}:${this.port}`;
	}
}


exports.location = {
	server: new Location({
		host: 'localhost',
		port: 3004,
	}),
	api: new Location({
		host: 'localhost',
		port: 3005,
	}),
	client: new Location({
		host: 'localhost',
		port: 8080,
	})
};
