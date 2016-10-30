const Boom = require('boom');

const handler = ({params}, reply) => {
	const {userId} = params;

	if (!parseInt(userId)) reply(Boom.notFound());
	else reply({id: userId});
};

exports.usersRoute = (server) => {
	server.route({
		method: 'GET',
		path: '/v1/id/{userId}',
		handler
	})
};
