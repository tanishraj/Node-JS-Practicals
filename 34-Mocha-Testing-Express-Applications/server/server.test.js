const request = require('supertest');
const expect = require('expect');

var app = require('./server')
	.app;

it('should return hello world', (done) => {
	request(app)
		.get('/')
		.expect(404)
		.expect((res) => {
			expect(res.body)
				.toInclude({
					error: 'Page not found.'
				})
		})
		.end(done);
})

it('should return friends names', (done) => {
	request(app)
		.get('/users')
		.expect(200)
		.expect((res) => {
			expect(res.body.names)
				.toInclude({
					firstName: 'Tanish',
					lastName: 'Singh'
				})
		})
		.end(done);
})
