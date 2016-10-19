const {helloRoute} = require('./testRoutes');
const {usersRoute} = require('./usersRoute');

exports.app = (server) => {

	// test routes
	helloRoute(server);
	usersRoute(server);
};
