const {helloRoute} = require('./routes/testRoutes');
const {usersRoute} = require('./routes/usersRoute');
const {accountRoutes} = require('./routes/accountRoutes');

exports.app = (server) => {

	// test routes
	helloRoute(server);
	usersRoute(server);

	// mongo query routes
	accountRoutes(server);
};
