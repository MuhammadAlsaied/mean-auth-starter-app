// load environment variables
require('dotenv').config();

// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
require('./config/passport')(passport);

// import routes
const users = require('./routes/users');

// intialize app
const app = express();
//server port number
const port = process.env.PORT;

//connect to mongodb
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true
});

// configure middlewres
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.static("public"));
app.use("/users", users);
app.get('*', (req, res) => {
  res.redirect('/');
});

// start server
app.listen(port, function() {
  console.log("Server started on port " + port);
});
