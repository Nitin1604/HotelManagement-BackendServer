const express = require('express')
var jwt = require('jsonwebtoken');
const app = express()
const port = 8080
const bodyParser = require('body-parser');
var cors = require('cors')
const path = require('path')

const { saveUser, getUserById, getDashboardData, getDashboardDataById } = require('./database');
const { createErrorResponse, SECRET_KEY } = require('./utils/utils');
const errorHandler = require('./middlewares/errorHandler');
const authenticationHandler = require('./middlewares/authentication');


var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(authenticationHandler)

app.get('/', (req, res, next) => {
  console.log(path.join(__dirname, 'public'));
  res.send({});
})

app.post('/login', (req, res) => {

  console.log(req.body.username, req.body.password);

  let userFoundInDB = getUserById(req.body.username);

  let response = {};

  if (userFoundInDB === undefined) {
    response = createErrorResponse(`User ${req.body.username} not found`);
  }

  else if (userFoundInDB.password !== req.body.password) {
    response = createErrorResponse("Password Incorrect")
  } else {
    var token = jwt.sign({ user: req.username }, SECRET_KEY);
    response = {
      signInToken: token
    }
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(response);
})


app.post('/register', (req, res) => {

  console.log(req.body.username, req.body.password, req.body.name);

  saveUser({ username: req.body.username, password: req.body.password, name: req.body.name });

  var token = jwt.sign({ user: req.body.username }, SECRET_KEY);
  var response = {
    signInToken: token
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(response);
})


app.get('/dashboard', (req, res) => {
  let response = getDashboardData(req.decodedUser);
  res.setHeader('Content-Type', 'application/json');
  res.send(response);
})

app.get('/dashboards/:hotelId', (req, res) => {
  let response = getDashboardDataById(req.decodedUser,req.params.hotelId);
  console.log(response);
  res.setHeader('Content-Type', 'application/json');
  res.send(response);
})


app.use(errorHandler);

app.listen(port, () => {
  console.log(`Hotel Management app started on http://localhost:${port}`)
})