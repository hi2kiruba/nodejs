//http module
var fs = require('fs');
var http = require('http');

var map = require('through2-map');

uc = map(function(chuck){
	return chuck.toString().toUpperCase();
})
var server = http.createServer(function(request, response){
	if(request.method == 'POST'){
		request.pipe(uc).pipe(response);
	}
});
server.listen(process.argv[2]);