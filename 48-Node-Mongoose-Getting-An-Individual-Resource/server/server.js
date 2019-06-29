const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { toDo } = require('./models/todo');
const { user } = require('./models/user');
const {ObjectId} = require('mongodb');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new toDo({
		text: req.body.text,
		completed: req.body.completed,
		completedAt: req.body.completedAt
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	})
})

app.get('/todos', (req, res) => {
	toDo.find().then((todos) => {
		res.send({todos});
	}, (err) => {
		res.status(400).send(err);
	});
})

app.get('/users', (req, res) => {
	user.find().then((users) =>{
		res.send({users});
	}, (err) => {
		res.status(400).send(err);
	})
})

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;
	if(!ObjectId.isValid(id)){
		return res.status(404).send();
	}
	toDo.findById(id).then((todo) => {
		if(!todo){
			return todo.status(404).send();
		}
		res.send({todo});
	}, (err) => {
		res.status(400).send(err);
	})
})

app.listen(8888, () => {
	console.log("Server is started on port 8888.");
});

module.exports = {
	app: app
}
