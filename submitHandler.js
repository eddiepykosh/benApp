// submitHandler.js

// This function will be called when the "btnSubmit" button is clicked
function handleSubmission(text, req) {
    // Log the content of the "textbox" to the console
    console.log('Textbox content:', text);
  
    // Get the requester's IP address from the request object
    const ipAddress = req.ip;
    console.log('Requester IP Address:', ipAddress);
  
    // You can add any other server-side logic here if needed
  }
  
  module.exports = handleSubmission;
  