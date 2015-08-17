var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('breaddit.db');

db.run("INSERT INTO loafs (title, content, votes, user) VALUES (?,?,?,?), (?,?,?,?), (?,?,?,?), (?,?,?,?), (?,?,?,?), (?,?,?,?)",
		'What is the deal with sourdough?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed dui suscipit, egestas dolor sed, ornare augue. Mauris nunc magna, molestie vitae ante eu, aliquam fringilla ipsum. Proin rhoncus orci arcu, vel facilisis velit porta et. Vestibulum pellentesque quam vitae mattis lobortis.', '3', 'knockknockJake',
		'Should bread bowls exist?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed dui suscipit, egestas dolor sed, ornare augue. Mauris nunc magna, molestie vitae ante eu, aliquam fringilla ipsum. Proin rhoncus orci arcu, vel facilisis velit porta et. Vestibulum pellentesque quam vitae mattis lobortis.', '4', 'wakeyjakeyeggsandbakey',
		'Crust or no?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed dui suscipit, egestas dolor sed, ornare augue. Mauris nunc magna, molestie vitae ante eu, aliquam fringilla ipsum. Proin rhoncus orci arcu, vel facilisis velit porta et. Vestibulum pellentesque quam vitae mattis lobortis.', '6', 'tehjaaaaake',
		'To sesame or not to sesame? ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed dui suscipit, egestas dolor sed, ornare augue. Mauris nunc magna, molestie vitae ante eu, aliquam fringilla ipsum. Proin rhoncus orci arcu, vel facilisis velit porta et. Vestibulum pellentesque quam vitae mattis lobortis.', '8', 'thef1rst',
		'Marbled Rye: an open forum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed dui suscipit, egestas dolor sed, ornare augue. Mauris nunc magna, molestie vitae ante eu, aliquam fringilla ipsum. Proin rhoncus orci arcu, vel facilisis velit porta et. Vestibulum pellentesque quam vitae mattis lobortis.', '9', 'youjustgotJAKED',
		'Avocado Toast, great breakfast or the greatest breakfast?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed dui suscipit, egestas dolor sed, ornare augue. Mauris nunc magna, molestie vitae ante eu, aliquam fringilla ipsum. Proin rhoncus orci arcu, vel facilisis velit porta et. Vestibulum pellentesque quam vitae mattis lobortis.', '45', 'TheREALJakeOfficial43',
		function(err){
			if(err){
				throw err
			}
		}
	);

db.run("INSERT INTO slices (content, loaf_id, user) VALUES (?,?,?), (?,?,?), (?,?,?), (?,?,?), (?,?,?), (?,?,?), (?,?,?)",
		'F!rst', '1', 'F1rstJake',
		'F!rst', '2', 'F1rstJake',
		'F!rst', '3', 'F1rstJake',
		'F!rst', '4', 'F1rstJake',
		'F!rst', '5', 'F1rstJake',
		'F!rst', '6', 'F1rstJake',
		'S3cond', '1', 'Th!rdJake',
			function(err){
			if(err){
				throw err
			}
		}
	);