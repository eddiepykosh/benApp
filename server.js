// server.js

const express = require('express');
const app = express();
const path = require('path');
const handleSubmission = require('./submitHandler'); // Import the submitHandler.js file

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