const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');

const authMiddleware = require('./middlewares/auth.middleware');

const port = 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser('dwadaw2452fsef4yghtdg'));

app.use(express.static('public')); // read file static

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);

app.get('/', (req, res) => res.render('index', {name: 'aaa'}))


app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))
