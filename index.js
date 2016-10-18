const config = require('./config');
const {getRoutes} = requrie('./src/getRoutes');
const {Server} = requrie('hapi');

const server = new Server();
server.connection(config);

getRoutes(server);

server.start(() => {
	console.log(`Started at: ${server.info.uri}`);
});
