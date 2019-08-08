const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {toDo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

// find by id and remove
toDo.findByIdAndRemove('5d1871dace90df05b6c01cd5').then((todo) =>{
	console.log(todo);
})
