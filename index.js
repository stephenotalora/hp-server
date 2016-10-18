const {config} = require('./config');
const {app} = require('./src/app');
const {Server} = require('hapi');

const server = new Server();
const {devServer, reporters: options} = config;

// server boiler-plate
server.connection(devServer);
server.register({
	register: require('good'),
	options
}, e => {
	if (e) {
		console.err(e);
		return;
	}

	// otherwise ...
	app(server);

	server.start(() => {
		console.log(`Started at: ${server.info.uri}`);
	});
});
