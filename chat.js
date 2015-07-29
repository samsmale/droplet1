var net = require('net')
var fs = require('fs')
var port = 3000;
var clientList = [];
var usernames = [];
var chatHistory = [];

var server = net.createServer(function(c) {
	chatHistory.push(c['_handle'].fd + ' joined!')
	c.write(chatHistory.join('\n')+ '\n')

	clientList.forEach(function(client) {
			
		if (c !== client) {
			client.write(c['_handle'].fd + ' joined!\n')

		};
	})

	if (clientList.indexOf(c) === -1) {
		clientList.push(c);
		usernames.push(c['_handle'].fd)
	}; 

	c.on('data', function(data){
		var input = data.toString().trim();
		var inputArray = input.split(" ");
		var clientNum = clientList.indexOf(c);
		chatHistory.push(usernames[clientNum] + ' said ' + data.toString().trim());



		clientList.forEach(function(client) {
			
			if (c !== client) {
				client.write(usernames[clientNum] + ' says ' + data.toString().trim() + '\n')
			};
		})
		if (inputArray[0] === 'username') {
			usernames[usernames.indexOf(c['_handle'].fd)] = inputArray[1];
			console.log(usernames);
		};

			
		
		
	})

c.on('end', function(){
	
	var clientIndex = clientList.indexOf(c);
	clientList.splice(clientIndex, 1);
	var leavingClient = usernames.splice(clientIndex, 1);
	chatHistory.push(leavingClient[0] + ' just left.')
	clientList.forEach(function(client){
		
		client.write(leavingClient[0] + ' just left.\n')
	})

})
})




server.listen(3000, function() {
  console.log("Leestening")
});



