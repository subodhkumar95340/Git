//let http = require('http');

//1. First try
//create a server object
/*http.createServer(function (request, response) {
  response.write('Hello World!');
  response.end();
}).listen(3000, function(){
  console.log("server start at port 3000"); //the server object listens on port 3000
})*/

//http is the built in module of Node JS through which data is transferred over HTTP protocols
//see more built-in modules here: https://nodejs.org/dist/latest-v8.x/docs/api/


//2. HTML Response instead of plain text. Only difference http header
/*http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'}); //http header
  response.write('<h1>Hello World! This is an HTML response this time.</h1>');
  response.end()
}).listen(3000, function(){
  console.log("server start at port 3000 just because")
})*/


//3. Adding routing
let http = require('http');

//create a server object
http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  let url = request.url;
  if (url === '/about') {
    response.write('<h4>about page stuff</h4>');
    response.end();
  } else if (url === '/contact') {
    response.write('<h3>contact me through email only</h3>');
    response.end();
  } else {
    response.write('<h1>Hello World</h1><p>this takes any route</p>');
    response.end();
  }
}).listen(3000, function(){
  console.log("server start at port 3000. conventional")
})


#test
