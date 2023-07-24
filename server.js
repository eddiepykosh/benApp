// server.js

require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const handleSubmission = require('./submitHandler'); // Import the submitHandler.js file

const saltRounds = 10;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

// Middleware to check for authentication
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.set('WWW-Authenticate', 'Basic realm="Authentication Required"');
    return res.status(401).send('Authentication required.');
  }

  const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
  const enteredUsername = credentials[0];
  const enteredPassword = credentials[1];

  if (enteredUsername === username && enteredPassword === password) {
    return next();
  }

  res.set('WWW-Authenticate', 'Basic realm="Authentication Required"');
  return res.status(401).send('Authentication required.');
}

// Apply the authenticate middleware to all routes
app.use(authenticate);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle the "btnSubmit" form submission
app.get('/submit', (req, res) => {
  const textboxContent = req.query.textbox; // Get the value of "textbox" from the request query string
  handleSubmission(textboxContent); // Call the handleSubmission function with the textbox content
  res.send('Submission received.'); // Send a response back to the client
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

