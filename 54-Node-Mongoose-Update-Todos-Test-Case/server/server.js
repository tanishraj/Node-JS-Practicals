const _ = require('lodash');
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

app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;
	if(!ObjectId.isValid(id)) {
		return res.status(404).send();
	}
	toDo.findByIdAndRemove(id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	}, (err) => {
		res.status(400).send(err);
	})
})

app.patch('/todos/:id', (req, res) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['text', 'completed']);

	if(!ObjectId.isValid(id)){
		return res.status(404).send();
	}

	if(_.isBoolean(body.completed) && body.completed){
		body.completedAt = new Date().getTime();
	} else{
		body.completed = false;
		body.completedAt = null;
	}

	toDo.findByIdAndUpdate(id, {$set:body}, {new:true}).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}

		res.send({todo});
	}).catch(err => {
		res.status(400).send();
	})
})

app.listen(8080, () => {
	console.log("Server is started on port 8080.");
});

module.exports = {
	app: app
}
