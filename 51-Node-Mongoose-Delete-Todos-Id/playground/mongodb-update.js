const {
	MongoClient, ObjectID
} = require("mongodb");

MongoClient.connect("mongodb://localhost:27019/TodoApp", (err, db) => {
	if(err) {
		return console.log("Unable to connect to MogoDB server.");
	}
	console.log("Connected to MongoDB server.");

	db.collection('Todos')
		.findOneAndUpdate({
			_id: new ObjectID('5d086c9178042495fd81161f')
		}, {
			// update operators
			$set: {
				completed: true
			}
		}, {
			returnOriginal: false
		})
		.then((docs) => {
			console.log('data updated successfully', docs);
		}, (err) => {
			console.log('Something went wrong', err);
		})


	db.collection('Users')
		.findOneAndUpdate({
			_id: new ObjectID('5d07e1ebdeab4202d5a860f4')
		}, {
			$set: {
				name: 'Nick'
			},
			$inc: {
				age: -10
			}
		}, {
			returnOriginal: false
		})
		.then(docs => {
			console.log('Update successfully.', docs);
		}, (err) => {
			console.log('Something went wrong.', err);
		})

	db.close();
});
