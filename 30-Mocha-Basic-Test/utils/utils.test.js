const utils = require('./utils');
// BDD behavior driven development
it('should add two numbers', () => {
	var res = utils.add(33, 11);
	if (res != 44)
		throw new Error(`Expected 44,  but got ${res}.`);
});

it('should square the number', () => {
	var res = utils.square(11);

	if (res != 121) {
		throw new Error(`Expected 121, but got ${res}`);
	}
})
