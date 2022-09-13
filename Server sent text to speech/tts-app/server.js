var static = require('node-static');
 
//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('./public');
var port=8000;
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(port, function(){
	console.log("server started. listening on "+port);
});