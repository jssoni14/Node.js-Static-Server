var static = require('node-static');
var port = 8000;
//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('./public');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response,function(e,res){
            if(e && e.status === 404){
              file.serveFile('/error.html',404,{},request,response);
            }
        });
    }).resume();
}).listen(port,function(){
  console.log('server starter on port '+port);
});