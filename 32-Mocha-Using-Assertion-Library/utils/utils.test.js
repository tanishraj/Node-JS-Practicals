const expect = require('expect');
const utils = require('./utils');

// BDD behavior driven development
it('should add two numbers', () => {
	var res = utils.add(33, 11);
	expect(res)
		.toBe(44)
		.toBeA('number');
	// if(res != 44) throw new Error(`Expected 44,  but got ${res}.`);
});

it('should square the number', () => {
	var res = utils.square(11);
	expect(res)
		.toBe(121)
		.toBeA('number');
});

it('pass some parameter', () => {
	expect(12)
		.toNotBe(11);
	expect({
		name: 'Andrew'
	})
});

// it('object comparision', () => {
// 	// This will fail since we have create 2 seperate object
// 	expect({
// 			name: 'Andrew'
// 		})
// 		.toBe({
// 			name: 'Andrew'
// 		})
// });

// Working with object
it('object comparision', () => {
	// we can achieve this with toEqual
	expect({
			name: 'Andrew'
		})
		.toEqual({
			name: 'Andrew'
		})
});

// Working with array
it('include number in array', () => {
	expect([2, 3, 4])
		.toInclude(2)
});

// Working with array
it('exclude number in array', () => {
	expect([2, 3, 4])
		.toExclude(1)
});

// Working with object
it('include properties in object', () => {
	expect({
			name: 'Tanish',
			age: 25,
			sex: 'Male'
		})
		.toInclude({
			name: 'Tanish',
			age: 25,
			sex: 'Male'
		})
});


it('exclude properties in object', () => {
	expect({
		name: 'Tanish',
		age: 25,
		sex: 'Male'
	})

	.toExclude({
		name: 'Tanish',
		age: 22,
	})
});

//Assignment
it('User Name Object Check', () => {
	var user = {
		location: 'Bangalore',
		country: 'India'
	};
	var res = utils.setName(user, "Tanish Raj");
	console.log(user);
	expect(res)
		.toInclude({
			firstName: 'Tanish',
			lastName: 'Raj'
		})
})