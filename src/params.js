
class Location {
	constructor({host, port}) {
		this.host = host;
		this.port = port;
	}
	get url() {
		return `http://${this.host}:${this.port}`;
	}
}

const host = 'localhost';

exports.location = {
	server: new Location({
		host,
		port: 3004,
	}),
	api: new Location({
		host,
		port: 3006,
	}),
	client: new Location({
		host,
		port: 8080,
	})
};
