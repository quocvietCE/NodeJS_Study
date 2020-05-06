const db = require('../db');
const shortId = require('shortid');

module.exports.create = (req, res, next) => {
	res.render('transfer/create', {
		csrfToken: req.csrfToken()
	});
};

module.exports.postCreate = (req, res, next) => {
	const data = {
		id: shortId.generate(),
		amount: parseInt(req.body.amount),
		accountId: req.body.accountId,
		userId: req.signedCookies.userId
	}
	db.get('transfers').push(data).write();
	res.redirect('/transfer/create');
};