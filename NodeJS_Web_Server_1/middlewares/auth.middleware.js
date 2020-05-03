const db = require('../db');

module.exports.requireAuth = (req, res, next) => {
	console.log(req.cookies)
	console.log(!req.cookies.userId)
	console.log(req.cookies.userId)
	if(!req.cookies.userId) {
		console.log('have userId')
		res.redirect('/auth/login');
		return;
	}

	const user = db.get('users').find({id: req.cookies.userId}).value();
	console.log('user: ', user);
	if(!user) {
		res.redirect('/auth/login');
		return;
	}

	res.locals.user = user;

	next();
};