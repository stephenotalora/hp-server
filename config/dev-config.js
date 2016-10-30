// dev server config
const devServer = {
	host: 'localhost',
	port: 8080
};

// mongo persistence
const persistence = {
	host: `mongodb://localhost`,
	port: 27017,
	db: 'test'
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
	persistence,
	reporters
};
