

exports.location = {
	server: {
		host: '0.0.0.0',
		port: 3004,
		get url() { return 'http://' + this.host + ':' + this.port; }
	},
	api: {
		host: '0.0.0.0',
		port: 3005,
		get url() { return 'http://' + this.host + ':' + this.port; }
	},
	client: {
		host: '0.0.0.0',
		port: 8080,
		get url() { return 'http://' + this.host + ':' + this.port; }
	}
};
