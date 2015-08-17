var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('breaddit.db');
var methodOverride = require('method-override');

app.use(urlencodedBodyParser);
app.set('view_engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.static('css'));

var rndHouseNumber = function (){
	var number = Math.floor(Math.random() * (6));
	return number
}

app.get('/', function(req, res){
	res.redirect('/loafs/');
});

app.get('/loafs', function (req, res){
	
	db.all('SELECT * FROM loafs ORDER BY votes desc', function(err, loafs){
	if (err) {
		throw err
	} else {
		db.all('SELECT * FROM slices', function(err, slices){
			var commentTotal =[];
			for (var i = 0; i <= loafs.length; i++) {
				commentTotal[i] = (0)
			};
			for (var i = 1; i < slices.length; i++) {
				var rnd = [1,2,3,4,5,6]
				var num = slices[i].loaf_id
				commentTotal[num]++
				console.log(rnd)
			};
			res.render('index.ejs', {loafs: loafs, slices: commentTotal, rnd: rnd})
		})
	}
})
})

app.get('/loafs/new', function (req, res){
	res.render('new.ejs');
});

app.post('/loafs/:id/', function (req, res){
	db.run('INSERT INTO slices(user, content, loaf_id) VALUES (?,?,?)', req.body.user, req.body.content, parseInt(req.params.id), function(err){
	if (err) {
		throw err;
	} else res.redirect('/loafs/'+ parseInt(req.params.id))
})			
})

app.post('/loafs', function (req, res){
	db.run('INSERT INTO loafs(title, content, votes, user) VALUES (?,?,?,?)', req.body.title, req.body.content, 0, req.body.user, function(err){
	if (err) {
		throw err;
	} else res.redirect('/loafs/'+ this.lastID)
})			
})

app.put('/loafs/:id/upvote', function (req, res){
	db.run('UPDATE loafs SET votes = votes+1 WHERE id=?', parseInt(req.params.id), function(err){
	if (err) {
		throw err;
	} else {
		 res.redirect('/loafs/'+ parseInt(req.params.id))
	}
})
})

app.put('/loafs/:id', function (req, res){
	db.run('UPDATE loafs SET title =?, content=? WHERE id=?', req.body.title, req.body.content, parseInt(req.params.id), function(err){
	if (err) {
		throw err;
	} else {
		 res.redirect('/loafs/'+ parseInt(req.params.id))
	}
})
})

app.get('/loafs/:id', function (req, res){
	db.get('SELECT * FROM loafs WHERE loafs.id=?', parseInt(req.params.id), function(err, loafs){
	if (err) {
		throw err;
	} else {
		db.all('SELECT * FROM slices WHERE slices.loaf_id=?', parseInt(req.params.id), function(err, slices){
		if (err) {
		throw err;
	} else {
		console.log(loafs)
		console.log(slices)
}
		res.render('show.ejs', {loafs:loafs, slices:slices});
})	
}
});
});



app.delete('/loafs/:id', function (req, res){
	db.run('DELETE FROM loafs WHERE loafs.id=?', parseInt(req.params.id), function(err, loaf){
	if (err) {
		throw err;
	} else { 
		res.redirect('/loafs/')}
})
})

app.get('/loafs/:id/edit', function (req, res){
	db.get('SELECT * FROM loafs WHERE loafs.id=?', parseInt(req.params.id), function(err, loaf){
	if (err) {
		throw err;
	} else {
		res.render('edit.ejs', {loaf: loaf});
}	
});
});


app.listen(3000, function(){
	console.log('listening on port 3000!')
});
