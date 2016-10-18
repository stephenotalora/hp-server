const config = require('./config');
const {helloRoute} = require('./src/getRoutes');
const {Server} = require('hapi');

const server = new Server();
server.connection(config);

helloRoute(server);

server.start(() => {
	console.log(`Started at: ${server.info.uri}`);
});
