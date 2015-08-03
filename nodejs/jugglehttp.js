var http = require('http');
//Remove first two array node
var urls = process.argv.slice(2);

var results = [];
//initialize the result array
for(var i=0; i<urls.length; i++) {
	results[i] =null;
}
//All url result value will be "NULL"
//console.log(results);

/* Loop the url*/
for(var i=0; i<urls.length; i++) {
	(function(i) {
		//HTTP get request with url
		http.get(urls[i], function(request){
			var result ="";
			request.setEncoding('utf8');
			
			//receiving data
			request.on("data", function(data){
				result += data;
			});
			request.on("end", function(){
				results[i] = result;
				var resultCount = 0;
				for (j = 0; j < results.length; j++) {
					if (results[j] != null) resultCount++;
				}
				if(resultCount === results.length) {
					 for (j = 0; j < results.length; j++) {
						console.log(results[j]);
					}
				}
			});
		});
	})(i);

}
