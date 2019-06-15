const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

describe('App', () => {
	var db = {
		saveUser: expect.createSpy()
	};

	// app.__set__('db', db);

	it('should call the spy correctly', () => {
		var spy = expect.createSpy();
		spy('Andrew', 25);
		expect(spy)
			.toHaveBeenCalledWith('Andrew', 25);
	});

	it('should call user with user object', () => {
		var email = 'tanishraj91@gamil.com';
		var password = 'hello@123';

		app.handleSignup(email, password);
		expect(db.saveuser)
			.toHaveBeenCalledWith({
				email: email,
				password: password
			})
	})
})
