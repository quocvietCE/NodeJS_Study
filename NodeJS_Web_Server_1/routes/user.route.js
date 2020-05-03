const express = require('express');

const controller = require('../controllers/user.controller');
const validate = require('../validate/user.validate');

const router = express.Router();

router.get('/', controller.index);

router.get('/cookie', function(req, res, next) {
	 res.cookie('user-id', 1234);
	 res.send('Hello 1234');
})

router.get('/create', controller.getCreate)

router.get('/search', controller.search)

router.post('/create', validate.postCreate, controller.postCreate)

router.get('/:id', controller.viewUser)

module.exports = router;