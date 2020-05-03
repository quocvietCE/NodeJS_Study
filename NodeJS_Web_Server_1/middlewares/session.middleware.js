const shortId = require('shortid');

module.exports = (req, res, next) => {
	if(!req.signedCookie.sessionId) {
		res.cookie('sessionId', shortId.generate() ,{
			signed: true
		})
	}

	next();
}