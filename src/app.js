const {helloRoute} = require('./testRoutes');

exports.app = (server) => {

	// test routes
	helloRoute(server);
};
