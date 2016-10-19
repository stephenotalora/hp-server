const handler = (request, reply) => {
	reply(request.params);
};

exports.usersRoute = (server) => {
	server.route({
		method: 'GET',
		path: '/{userId}',
		handler
	})
};
