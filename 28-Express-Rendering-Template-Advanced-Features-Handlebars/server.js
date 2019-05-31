const express = require('express');
const hbs = require('hbs');

var app = express();

// Setting up node for partial files / Code
hbs.registerPartials(__dirname + '/views/partials');

// Setting up the view engine
app.set('view engine', 'hbs');

// Server setup to serve the folder
app.use(express.static(__dirname + '/public'));

// HBS helpers to reuse attributes on template
hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
})

// Capitalize helper HBS
hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
})

app.get('/', (req, res) => {
	res.render('home.hbs', {
		title: 'Home Page',
		heading: 'Welcome to Home Page'
	});
})

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		title: 'About Page',
		heading: 'This is About Page'
	});
})

app.listen(8080, () => {
	console.log(
		'Server is up and will serve you on http://localhost:8080/'
	);
});
