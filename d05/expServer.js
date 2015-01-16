var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));


var userDB = [];

var User = function(firstName, lastName, email) {
	this.firstName = firstName
	this.lastName = lastName
	this.email = email
}


app.get('/', function(req, res) {
  res.render('todo.ejs', { userDB: userDB });
});

app.post('/add', function(req, res) {
	var user = new User(req.body.firstName, req.body.lastName, req.body.email)
	// console.log(user);
  	userDB.push(user);
  	console.log(userDB);
  res.render('todo.ejs', { userDB: userDB });
})

app.listen(3000);

console.log('listening on port 3000!');