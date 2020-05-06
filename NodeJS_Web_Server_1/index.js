require('dotenv').config();

console.log(process.env.SESSION_SECRET);

const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');
const cartRoute = require('./routes/cart.route');
const transferRoute = require('./routes/transfer.route');

const authMiddleware = require('./middlewares/auth.middleware');
const sessionMiddleware = require('./middlewares/session.middleware');

const apiProductRoute = require('./api/routes/product.route');

const port = 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/products', apiProductRoute);

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
// app.use(csurf({ cookie: true }));

app.use(express.static('public')); // read file static

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/transfer', authMiddleware.requireAuth, transferRoute);

app.get('/', (req, res) => res.render('index', {name: 'aaa'}))

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))

