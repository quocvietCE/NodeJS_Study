const db = require('../db');

module.exports.requireAuth = (req, res, next) => {
	if(!req.signedCookies.userId) {
		console.log('have userId')
		res.redirect('/auth/login');
		return;
	}

	const user = db.get('users').find({id: req.signedCookies.userId}).value();
	console.log('user: ', user);
	if(!user) {
		res.redirect('/auth/login');
		return;
	}

	res.locals.user = user;

	next();
};