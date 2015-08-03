var fs = require('fs');
var path = require('path');
module.exports = function(dirname, ext, callback) {
	var extention = "." +ext;
	fs.readdir(dirname, function(err, files){
		if(err) {
			callback(err, null);
		} else{
			result = [];
			files.forEach(function(entry) {
				if (path.extname(entry) == extention) {
					result.push(entry);
				}
			});
			callback(null, result);
		}
	});
};