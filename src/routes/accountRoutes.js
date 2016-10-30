const Boom = require('boom');
const accLib = require('./../lib/accounts');

// route handlers
const getAccountById = ({params: {accountId}}, reply) => {
	accLib.fetchAccountById(accountId, (result) => {
		result
			.then((acc) => {
				if (acc && acc.length) reply(acc[0]);
				else reply(Boom.notFound());
			})
			.catch((error) => { reply(Boom.notFound()) });
	});
};

const getAccountByLastName = ({params: {lastName}}, reply) => {
	accLib.fetchByLastName(lastName, (result) => {
		result
			.then((acc) => {
				const l = acc.length;
				if (acc && acc.length) reply({
					count: l,
					accounts: acc
				});
				else reply(Boom.notFound());
			})
			.catch((err) => {
				reply(Boom.notFound());
			});
	});
}


// account routes
exports.accountRoutes = (server) => {
	server.route({
		method: 'GET',
		path: '/v1/accId/{accountId}',
		handler: getAccountById
	});

	server.route({
		method: 'GET',
		path: '/v1/accList/{lastName}',
		handler: getAccountByLastName
	});
};
