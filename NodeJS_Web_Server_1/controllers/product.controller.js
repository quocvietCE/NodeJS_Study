const db = require('../db);

module.exports.index = (req,res) => {
	res.render('products/index', {
		const page = parseInt(req.query.page) || 1;
		const perPage = 10;

		const start = (page-1)*perPage;
		const end = page*perPage;
		const drop = (page-1)*perPage;
		products: db.get('products').value().slice(start, end);
		products: db.get('products').drop(drop).take(perPage).value();
	});
}