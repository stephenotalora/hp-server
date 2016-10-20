// dev server config
const devServer = {
	host: 'localhost',
	port: 8080
};


// log reporters
const reporters = {
	reporters: {
		console: [{
			module: 'good-console',
		}, 'stdout']
	}
};

module.exports = {
	devServer,
	reporters
};
