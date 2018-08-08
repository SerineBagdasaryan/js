var http = require('http');
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'bacon'
    });
    var responseBody = {testkey:123}
    console.log(JSON.stringify(responseBody))
    res.write(JSON.stringify(responseBody));
    res.end();

}).listen(8080);