var net = require('net')
var fs = require('fs')
var port = 3000;
var response = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later','Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', "Don't count on it",'My reply is no', 'My sources say no', 'Outlook not so good','Very doubtful'] 

var server = net.createServer(function(c){

	c.on('data', function(data){
if (data.toString().trim()){
	var random = Math.floor(Math.random() * response.length);
	c.write(response[random] + '\n')
	}

})
	})
	server.listen(port, function(){
console.log('connected')

	})
	

