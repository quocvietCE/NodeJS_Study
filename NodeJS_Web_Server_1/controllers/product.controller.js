// const db = require('../db);
const Product = require('../models/product.model');

module.exports.index = async (req,res) => {
	// var page = parseInt(req.query.page) || 1;
	// const perPage = 10;

	// const start = (page-1)*perPage;
	// const end = page*perPage;

	// const drop = (page-1)*perPage;
	// res.render('products/index', {
	// 	products: db.get('products').value().slice(start, end);
	// 	// products: db.get('products').drop(drop).take(perPage).value();
	// });

	// constProduct.find().then((products) => {
	// 	res.render('products/index', {
	// 		products: products
	// 	});
	// });

	try {
		const products = await Product.find();
		res.render('products/index', {
			products: products
		});
	} catch(error) {
		next(error)
	}
	
};