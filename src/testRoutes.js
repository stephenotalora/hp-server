const helloRoute = (server) => {
	if (!server) return null;

	server.route({
		method: 'GET',
		path: '/',
		handler: (req, resp) => {
			server.log('error', 'oh noes!');
			resp('hello world!');
		}
	});
};

module.exports = {
	helloRoute
};
