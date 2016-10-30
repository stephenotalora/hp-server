const Joi = require('joi');

module.exports = Joi.object().keys({
	id: Joi.string().alphanum().min(12),
	first_name: Joi.string().max(100),
	last_name: Joi.string().max(100),
	accounts: Joi.array().items(Joi.object().keys({
		acount_type: Joi.string(),
		account_balance: Joi.number(),
		currency: Joi.string()
	}))
});
