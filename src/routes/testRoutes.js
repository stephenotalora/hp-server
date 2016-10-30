const handler = (req, reply) => {
	reply('hello world!');
};

const helloRoute = (server) => {
	if (!server) return null;

	server.route({
		method: 'GET',
		path: '/',
		handler
	});
};

module.exports = {
	helloRoute
};
