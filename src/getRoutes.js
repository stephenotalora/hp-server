const helloRoute = (server) => {
	if (!server) return null;

	server.route({
		method: 'GET',
		path: '/',
		handler: (req, resp) => {
			resp('hello world!');
		}
	});
};

module.exports = {
	helloRoute
};
