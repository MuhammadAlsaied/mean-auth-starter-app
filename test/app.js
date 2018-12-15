require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true
});


//test files
require('./models/user');
