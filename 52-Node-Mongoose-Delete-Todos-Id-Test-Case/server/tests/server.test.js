const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {toDo} = require('./../models/todo');
const {ObjectId} = require('mongodb');

const todos = [{
	_id: new ObjectId(),
	text: 'First test todo',
},{
	_id: new ObjectId(),
	text: 'Second test todo',
}]

beforeEach((done) => {
	toDo.remove({}).then(() => {
		return toDo.insertMany(todos);
	}).then(() => done())
})

// beforeEach((done) => {
// 	console.log("Removed All the todos.");
// 	toDo.remove({}).then(() => {
// 		return done();
// 	})
// })

describe('POST /todos', () => {
	it('Should create a new todo record.', (done) => {
		var text = 'Test todo text';
		request(app)
		.post('/todos')
		.send({text})
		.expect(200)
		.expect(res => {
			expect(res.body.text).toBe(text);
		})
		.end((err, res) => {
			if(err) return done(err);

			toDo.find({text}).then((res) => {
				console.log(`Total number of records in todos list: ${res.length}`);
				expect(res.length).toBe(1);
				expect(res[0].text).toBe(text);
				done();
			}).catch(e => done(e));
		})
	}),

	it('Should not create todo with invalid body data.', (done) => {
		request(app)
		.post('/todos')
		.send({})
		.expect(400)
		.end((err, res) => {
			if(err) return done(err);

			toDo.find().then(res => {
				expect(res.length).toBe(2);
				done();
			}).catch(e => done(e));
		})
	})
})

describe('GET /todos', () => {
	it('Should get all the todos.', (done) => {
		request(app)
		.get('/todos')
		.expect(200)
		.expect((res) => {
			expect(res.body.todos.length).toBe(2);
		})
		.end(done);
	})
})

describe('GET /todos/:id', () => {
	it('Should return todo doc', (done) => {
		console.log(`/todo/${todos[0]._id.toHexString()}`);
		request(app)
		.get(`/todos/${todos[0]._id.toHexString()}`)
		.expect(200)
		.expect((res) => {
			expect(res.body.todo.text).toBe(todos[0].text);
		})
		.end(done);
	})
})

describe('DELETE /todos/:id', () => {
	it('should return deleted todo doc', (done) => {
		var hexId = todos[0]._id.toHexString();

		request(app)
		.delete(`/todos/${hexId}`)
		.expect(200)
		.expect(res => {
			expect(res.body.todo._id).toBe(hexId);
		})
		.end((err, res) => {
			if(err) {
				return done(err);
			}
		})

		toDo.findById(hexId).then((todo) => {
			expect(todo).toExist();
			done();
		}).catch((err) => {
			done(err);
		})
	});

	it('should return 404 if todo not found', (done) => {
		var hexId = new ObjectId().toHexString();
		request(app)
		.delete(`/todos/${hexId}`)
		.expect(404)
		.end(done)
	});

	it('should return 404 if object is invalid', (done) => {
		request(app)
		.delete(`/todos/1234abc`)
		.expect(404)
		.end(done);
	})
})
