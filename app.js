var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('signups.db');
app.use(urlencodedBodyParser);
app.set('view_engine', 'ejs');
app.use(express.static('css'));

app.get('/', function(req, res){
	res.redirect('/welcome');
});

app.get('/welcome', function (req, res){
  res.render('show.ejs');
});

app.post('/welcome', function (req, res){
	db.run('INSERT INTO signups(email) VALUES (?)', req.body.email, function(err){
	if (err) {
		throw err;
	} else res.redirect('/thanks')
})			
})

app.get('/thanks', function (req, res){
  res.render('thanks.ejs');
});

app.listen(3000, function(){
	console.log('listening on port 3000!')
});