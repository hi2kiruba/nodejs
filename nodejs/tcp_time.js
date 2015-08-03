//Net module
var net = require('net');

//zero fill
function pad(n) { 
	//ternary operator - condition ? expression1 : expression2
	return n < 10 ? '0' + n : n 
}

var server = net.createServer(function(socket){
	//Socket handling logic
	d = new Date();
	s = d.getFullYear() + "-"
    + pad(d.getMonth() + 1) + "-"
    + pad(d.getDate()) + " "
    + pad(d.getHours()) + ":"
    + pad(d.getMinutes()) + "\n";
	socket.write(s);
	socket.end();
})
server.listen(process.argv[2]);