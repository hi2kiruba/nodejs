var http = require('http');
//console.log(process.argv);
var url = process.argv[2];
//console.log(url);
http.get(url, function(request){
	request.setEncoding("utf8");
	request.on("data", function(data){
		console.log(data);
	});
	
});