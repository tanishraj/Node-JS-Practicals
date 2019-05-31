const express = require('express');

var app = express();

// Server setup to serve the folder
app.use(express.static(__dirname + '/public'));

app.listen(8080, () => {
	console.log(
		'Server is up and will serve you on http://localhost:8080/'
	);
});
