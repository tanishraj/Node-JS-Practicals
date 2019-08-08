const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {toDo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

var id = '5d0925baffb99270033e3892';

if(!ObjectId.isValid(id)){
	console.log('Id is not valid.');
}

/*
toDo.find({
	_id: id
}).then((res) => {
	console.log(`Find All: ${res}`);
})

toDo.findOne({
	_id: id
}).then((res) => {
	console.log(`Find One: ${res}`);
})

toDo.findById(id).then((res) => {
	if(res === null) {
		return console.log('Id not found.');
	}
	console.log(`Find By ID: ${res}`);
}).catch(err => {
	console.log("Something went wrong.", err);
})
*/

user.findById(id).then((res) => {
	if(res === null) {
		return console.log('Id not found.');
	}
	console.log(`Find By ID: ${res}`);
}).catch(err => {
	console.log("Something went wrong.", err);
})
