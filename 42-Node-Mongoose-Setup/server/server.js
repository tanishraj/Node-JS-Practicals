var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27019/TodoApp');

var Todo = mongoose.model('Todo', {
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
})

var newTodo = new Todo({
	text: 'Cook Dinner',
	completed: false,
	completedAt: 1900
});

newTodo.save()
	.then((docs) => {
		console.log(docs._doc);
	}, (err) => {
		console.log("Something went wrong.");
	})
