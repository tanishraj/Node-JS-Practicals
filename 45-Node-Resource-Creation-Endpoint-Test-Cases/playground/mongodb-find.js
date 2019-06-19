const {
	MongoClient, ObjectID
} = require("mongodb");

MongoClient.connect("mongodb://localhost:27019/TodoApp", (err, db) => {
	if(err) {
		return console.log("Unable to connect to MogoDB server.");
	}
	console.log("Connected to MongoDB server.");

	db.collection("Todos")
		.find()
		.toArray()
		.then(
			docs => {
				console.log("All Todos");
				console.log(JSON.stringify(docs, undefined, 2));
			},
			err => {
				console.log("Unable to fetch todos", err);
			}
		);

	db.collection("Todos")
		.find({
			completed: false
		})
		.toArray()
		.then(
			docs => {
				console.log("Pending Todos");
				console.log(JSON.stringify(docs, undefined, 2));
			},
			err => {
				console.log("Unable to fetch todos", err);
			}
		);

	db.collection("Todos")
		.find({
			_id: new ObjectID('5d07f756203388e56fc7bd8a')
		})
		.toArray()
		.then(
			docs => {
				console.log("ID based Todos");
				console.log(JSON.stringify(docs, undefined, 2));
			},
			err => {
				console.log("Unable to fetch todos", err);
			}
		);

	db.collection("Todos")
		.find()
		.count()
		.then(
			docs => {
				console.log("Total Todos:");
				console.log(docs);
			},
			err => {
				console.log("Unable to fetch todos", err);
			}
		);

	db.collection("Todos")
		.find({
			text: 'Learn Node'
		})
		.toArray()
		.then(
			docs => {
				console.log("Todos For Node JS Learning:");
				console.log(JSON.stringify(docs, undefined, 2));
			},
			err => {
				console.log("Unable to fetch todos", err);
			}
		);

	db.close();
});
