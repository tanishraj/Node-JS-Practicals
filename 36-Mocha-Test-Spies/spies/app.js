const db = require('./db.js');

module.exports.handleSignup = (email, password) => {
	//check if already exist
	//save the user in database
	db.saveUser({
		email: email,
		password: password
	});
	//send welcome email
}
