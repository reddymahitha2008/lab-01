/**
 * Lab 01: Node.js and Express Server
 * Student Name: Reddy Mahitha
 * Registration Number: 252U1R3079
 * Section: CSE-DS-2B
 * 
 * File: server.js
 * Description: Production-ready Express.js server implementing required REST endpoints and 404 middleware.
 */

// Step 1: Import the Express framework
const express = require('express');

// Step 2: Initialize the Express application instance
const app = express();

// Step 3: Define Port number
// process.env.PORT allows dynamic port assignment in cloud deployment environments (like Render),
// while defaulting to port 3000 during local development.
const PORT = process.env.PORT || 3000;

// ==========================================
// ROUTE DEFINITIONS
// ==========================================

/**
 * 1. GET /
 * Purpose: Home / Welcome route
 * Response: Plain text welcome message
 * HTTP Status: 200 (OK)
 */
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Node.js and Express Server!');
});

/**
 * 2. GET /about
 * Purpose: Returns student identity metadata in JSON format
 * Response: JSON object containing 'name' and 'section'
 * HTTP Status: 200 (OK)
 */
app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'Reddy Mahitha',
    section: 'CSE-DS-2B'
  });
});

/**
 * 3. GET /time
 * Purpose: Returns the server's current date and time
 * Response: JSON object with ISO string and formatted string generated using new Date()
 * HTTP Status: 200 (OK)
 */
app.get('/time', (req, res) => {
  const currentDate = new Date();
  res.status(200).json({
    currentTime: currentDate.toISOString(),
    formatted: currentDate.toString()
  });
});

/**
 * 4. 404 Catch-All Middleware
 * Purpose: Handle any route not defined above
 * Note: Placed AFTER all valid route handlers so unmatched requests reach here
 * Response: Plain text error message
 * HTTP Status: 404 (Not Found)
 */
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

// ==========================================
// START SERVER
// ==========================================
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
