const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {toDo} = require('./../models/todo');

beforeEach((done) => {
	console.log("Removed All the todos.");
	toDo.remove({}).then(() => {
		done();
	})
})

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
		})

		toDo.find().then((todos) => {
			console.log(`Total number of records in todos list: ${todos.length}`);
			expect(todos.length).toBe(1);
			expect(todos[0].text).toBe(text);
			done();
		}).catch((e) => {
			return done(e);
		})
	})
})
