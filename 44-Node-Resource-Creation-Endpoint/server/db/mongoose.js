// importing mongoose into this app
const mongoose = require('mongoose');

// making use of promise instead of callbacks
mongoose.Promise = global.Promise;

// connecting with db TodoApp on port 27019
mongoose.connect('mongodb://localhost:27019/TodoApp')

module.exports = {
	mongoose: mongoose
}
