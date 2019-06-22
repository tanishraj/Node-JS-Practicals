const {
	MongoClient, ObjectID
} = require("mongodb");

MongoClient.connect("mongodb://localhost:27019/TodoApp", (err, db) => {
	if(err) {
		return console.log("Unable to connect to MogoDB server.");
	}
	console.log("Connected to MongoDB server.");

	// db.collection('Todos')
	// 	.deleteMany({
	// 		text: 'dummy'
	// 	})
	// 	.then((docs) => {
	// 		console.log("Delete All that meets criteria.");
	// 		console.log(docs);
	// 	}, (err) => {
	// 		console.log('Something went wrong while deleting the data.', err);
	// 	})

	// db.collection('Todos')
	// 	.deleteOne({
	// 		text: 'dummy'
	// 	})
	// 	.then((docs) => {
	// 		console.log("Delete Single Record that meets criteria.");
	// 		console.log(docs);
	// 	}, (err) => {
	// 		console.log('Something went wrong while deleting the data.', err);
	// 	})

	db.collection('Todos')
		.findOneAndDelete({
			completed: false
		})
		.then((docs) => {
			console.log("Find and delete that meets criteria.");
			console.log(docs);
		}, (err) => {
			console.log('Something went wrong while deleting the data.', err);
		})

	db.close();
});
