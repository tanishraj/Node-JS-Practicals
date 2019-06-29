const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {toDo} = require('./../models/todo');

const todos = [{
	text: 'First test todo',
},{
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
