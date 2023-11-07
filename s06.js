
let http = require('http');
let server = http.createServer(requestHandler);
let port = "8087"
server.listen(port);
console.log("Server is running!" + port + "request 200!");

let func = {
    sum: Sum,
    Last: Last
}



let headers = {'Content-Type': 'Text/Plain'};
function Sum(res){
        console.log('Sum')
        res.writeHead(200, headers);
        
        res.write("Sum");
    }
function Last(res){
        console.log('Last')
        res.writeHead(200, headers);
        res.write("Last");

    }
   // "favicon.ico": function(){
      //  console.log('favicon')

  //  }
    //}
    


function requestHandler (request, response){
    console.log('request url: ', request.url);
    console.log('request: ', request.method);
    let firstpart = request.url.split('/')[1];

    if (firstpart !== "favicon.ico"){
        funcs [firstpart(response)]
    }
    


    
    
    response.end();
}
