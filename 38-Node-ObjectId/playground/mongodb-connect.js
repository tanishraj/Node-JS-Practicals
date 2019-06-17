const {
	MongoClient, ObjectID
} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27019/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MogoDB server.');
	}
	console.log('Connected to MongoDB server.');

	db.close();
});
