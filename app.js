// default
const path = require('path'); // importing path

// third party
const express = require('express'); // importing express
const bodyParser = require('body-parser');
const helmet = require('helmet'); // security middleware
const compression = require('compression'); // middleware

// own
const flipkartController = require('./controllers/flipkart');

//constants
const app = express(); // creating instance of express

app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Set directory to contain the templates ('views')
app.set('views', path.join(__dirname, 'views'));

// Set view engine to use, in this case 'some_template_engine_name'
app.set('view engine', 'ejs'); // setting view-engine to ejs

app.use(helmet()); // security middleware

app.use(compression()); // compressing code files middleware

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public'))); // set public folder to static

app.get('/result', flipkartController.searchResult);

app.get('/', flipkartController.display);

app.listen(process.env.PORT || 8000, () => {
  console.log('App listening on port')
});