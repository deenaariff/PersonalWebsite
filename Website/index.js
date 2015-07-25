var http = require('http'),
      fs = require('fs');


fs.readFile('./static/html/index.html', function (err, html) {
    console.log("Listening on server 8000");
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});

