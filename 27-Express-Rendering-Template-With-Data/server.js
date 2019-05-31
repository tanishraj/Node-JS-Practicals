const express = require('express');
const hbs = require('hbs');

var app = express();

// Setting up the view engine
app.set('view engine', 'hbs');

// Server setup to serve the folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home.hbs', {
		title: 'Home Page',
		year: new Date().getFullYear(),
		heading: 'Welcome to Home Page'
	});
})

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		title: 'About Page',
		year: new Date().getFullYear(),
		heading: 'This is About Page'
	});
})

app.listen(8080, () => {
	console.log(
		'Server is up and will serve you on http://localhost:8080/'
	);
});
