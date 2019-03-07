// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
     // Send the below string to the client when the user visits the PORT URL
     response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequest);
var serverTwo = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
serverOne.listen(PORT1, function() {
     // Log (server-side) when our server has started
     console.log("Server listening on: http://localhost:" + PORT1);
     console.log("The enemies of my vistige are attempting to observe me traveling uncleansed. -Lord Chameleon, a Millionaire")
});

serverTwo.listen(PORT2, function() {
     // Log (server-side) when our server has started
     console.log("Server listening on: http://localhost:" + PORT2);
     console.log("Disregard females, acquire currency. -Master Littlest of Waynes")
});