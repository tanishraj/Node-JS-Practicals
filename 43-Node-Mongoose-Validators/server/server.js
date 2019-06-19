var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27019/TodoApp');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
})

var newTodo = new Todo({
	text: 'Cook Dinner',
	completed: false,
	completedAt: 1900
});

newTodo.save()
	.then((doc) => {
		console.log(doc);
	}, (err) => {
		console.log("Something went wrong.");
	})

var UserModel = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
})

var newUser = new UserModel({
	name: 'Tanish     Raj',
	email: 'tanishraj91@gmail.com'
});
newUser.save()
	.then((doc) => {
		console.log(doc);
	}, (err) => {
		console.log("Something went wrong.");
	})
