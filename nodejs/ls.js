/*var fs = require('fs');
var dirname = process.argv[2];
var ext = process.argv[3];
var pat =  RegExp('\\.' + ext + '$');
var buf = fs.readdir(dirname, function(err, files){
	for (i = 0; i < files.length; i++) {
    if (pat.test(files[i])) {
      console.log(files[i]);
    }
  }
});*/
var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function(err, list) {
	list.forEach(function(file) {
		if(path.extname(file) === '.' +process.argv[3])
			console.log(file);
	});
});
