/**
 * Lab 01: Node.js and Express Server
 * Student Name: Reddy Mahitha
 * Registration Number: 252U1R3079
 * Section: CSE-DS-2B
 * 
 * File: basic-server.js
 * Description: Demonstrates creating a raw HTTP server using the built-in Node.js 'http' module.
 */

// Step 1: Import the core 'http' module built into Node.js (no external npm package required)
const http = require('http');

// Step 2: Define the port number on which the server will listen for requests
const PORT = 3000;

// Step 3: Create the HTTP server using http.createServer()
// The callback function is invoked every time an HTTP request hits the server.
// - 'req' (http.IncomingMessage): Contains details about the incoming request (URL, headers, method)
// - 'res' (http.ServerResponse): Used to prepare and send the response back to the client
const server = http.createServer((req, res) => {
  // Set HTTP status code 200 (OK) and specify Content-Type header as plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello" and close/terminate the HTTP connection
  res.end('Hello');
});

// Step 4: Bind and listen for incoming connections on the designated port
server.listen(PORT, () => {
  console.log(`Basic HTTP server running on port ${PORT}`);
});
