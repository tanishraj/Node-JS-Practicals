const MongoClient = require('mongodb')
	.MongoClient;

MongoClient.connect('mongodb://localhost:27019/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MogoDB server.');
	}
	console.log('Connected to MongoDB server.');

	// db.collection('Todos')
	// 	.insertOne({
	// 		text: 'Some text',
	// 		completed: false
	// 	}, (err, res) => {
	// 		if(err)
	// 			return console.log('Unable to insert data.', err);
	// 		console.log('Data inserted successfully.', JSON.stringify(res.ops,
	// 			undefined, 2));
	// 	})

	// db.collection('Users')
	// 	.insertOne({
	// 		name: 'Tanish Raj',
	// 		age: 25,
	// 		location: 'Bangalore'
	// 	}, (err, res) => {
	// 		if(err)
	// 			return console.log('Unable to insert data.', err);
	// 		console.log('Data inserted successfully.', JSON.stringify(res.ops,
	// 			undefined, 2));
	// 	})

	db.collection('Users')
		.insertOne({
			name: 'Tanish Raj',
			age: 25,
			location: 'Bangalore'
		}, (err, res) => {
			if(err)
				return console.log('Unable to insert data.', err);
			console.log(res.ops[0]._id.toString());
		})

	db.close();
});
