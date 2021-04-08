
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
		host: '51.178.49.196',
		port: 3004,
	}),
	api: new Location({
		host: '51.178.49.196',
		port: 3005,
	}),
	client: new Location({
		host: '51.178.49.196',
		port: 8080,
	})
};
