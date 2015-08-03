var lslib = require('./lslib');
var dir = process.argv[2];
//console.log("Dir -" +dir);
var ext = process.argv[3];
//console.log("Extention -" +ext)

lslib(dir, ext, function(err, files){
	for(i=0; i< files.length; i++){
		console.log(files[i]);
	}
	
});