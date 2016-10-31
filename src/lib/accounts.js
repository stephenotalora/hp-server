/**
 * @author Jonathan S. Otalora
 * Data Access layer for bank accounts
 */
const {MongoClient, ObjectID} = require('mongodb');
const {config} = require('./../../config');
const {host, port, db} = config.persistence;
const URL = `${host}:${port}/${db}`;

const initResult = (err, result) => (
	new Promise((resolve, reject) => {
		if (err) return reject(err);
		return resolve(result);
	})
);


exports.fetchAccountById = (accountId, done) => {
	MongoClient.connect(URL, (err, db) => {
		if (err) {
			done(initResult(err, null));
			return;
		}

		const bankData = db.collection('bank_data');
		bankData.find(
			{_id: new ObjectID(accountId)},
			{_id: 0}).toArray()
		.then((docs) => {
			done(initResult(null, docs));
			db.close();
		})
		.catch((err) => {
			done(initResult(err, null));
			db.close();
		});
	});
};

exports.fetchByLastName = (lastName, done) => {
	if (!lastName || !lastName.length) {
		done(initResult(err, nul));
		return;
	}

	const last_name = lastName.toUpperCase();
	MongoClient.connect(URL, (err, db) => {
		if (err) {
			done(initResult(err, null));
			return db.close();
		}

		const bankData = db.collection('bank_data');
		bankData.find({last_name}, {_id: 0}).toArray()
		.then((docs) => {
			done(initResult(null, docs));
			db.close();
		})
		.catch((err) => {
			done(initResult(err, null));
			db.close();
		});
	});
};
