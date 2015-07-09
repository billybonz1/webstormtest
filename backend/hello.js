var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
    var newFile = fs.createWriteStream("../app/index.html");
    request.pipe(newFile);
    request.on("end",function(){
        response.end("uploaded!");
    });

});


server.listen(11111);


console.log("Listening on port 11111...");