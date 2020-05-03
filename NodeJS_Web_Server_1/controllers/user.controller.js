var db = require('../db');
const shortId = require('shortid');

module.exports.index = (req, res) => res.render('users/index', {
	users: db.get('users').value()
})

module.exports.search = (req,res) => {
	var q = req.query.q;
	var matchedUsers = db.get('users').value().filter(user => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1)
	res.render('users/index', {
	users: matchedUsers
	})
}

module.exports.postCreate = (req, res) => {
	req.body.id = shortId.generate();
	// req.body.avatar = req.file.path.split('\\').slice(1).join("\\");
	req.body.avatar = req.file.path.split('\\').slice(1).join('\\');
	db.get('users').push(req.body).write();
	res.redirect('/users');
}

module.exports.viewUser = (req, res) => {
	// const id = parseInt(req.params.id);
	const id = req.params.id;
	const user = db.get('users').find({id: id}).value();
	console.log('user: ', user)
	res.render('users/view', {
		user: user
	});
}

module.exports.getCreate = (req, res) => {
	res.render('users/create');
}