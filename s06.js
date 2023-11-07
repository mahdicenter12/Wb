let http = require('http');
let server = http.createServer(requestHandler);
server.listen(8055);


let headers = {'Content-Type': 'Text/Plain'};

function requestHandler (request, response){
    console.log('request recived url: ', request.url);
    console.log('request: ', request.method);

    response.writeHead(200, headers);
    response.write('hi');
    response.end();
}