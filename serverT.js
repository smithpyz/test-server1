// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500. 

// * The one listening on port 7000 will always tell the user something good about themselves.
// Require/import the HTTP module
// * The one listening on 7500 will always tell the user something bad about themselves.*Make sure you create a Github repo and commit this code!
var http = require("http");
// Define a port to listen for incoming requests
var PORT1 = 10000;
var PORT2 = 10500;
// Create a generic function to handle requests and responses
function handleGoodRequest1(request, response) {
  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

function handleBadRequest2(request, response) {
  // Send the below string to the client when the user visits the PORT URL
  response.end("I guess it works, you smelly butt. Path Hit: " + request.url);
}
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleGoodRequest1);
var server2 = http.createServer(handleBadRequest2);
// Start our server so that it can begin listening to client requests.
// you need to set all of this up FIRST before you do the server.listen function because otherwise you'll come back with garbage.
// this function ONLY tells the server when to start listening. it doesn't have anything related to handleRequest --- so you need to put in more crap after.
server1.listen(PORT1, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1 + ". You look great today!");
});

server2.listen(PORT2, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2 + ". You smell like fish eggs!");
});
