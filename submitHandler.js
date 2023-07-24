// submitHandler.js
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;
// This function will be called when the "btnSubmit" button is clicked
function handleSubmission(text, req) {
    // Log the content of the "textbox" to the console
    console.log('Textbox content:', text);
    // Get the requester's IP address from the request object
    const ipAddress = req.ip;
    console.log('Requester IP Address:', ipAddress);
  
    // You can add any other server-side logic here if needed
    client.calls
    .create({
       url: ' http://demo.twilio.com/docs/classic.mp3',
       from: phoneNumber,
       to: text,
       method: 'GET'
     })
    .then(call => console.log(call.sid));   
  }
  
  module.exports = handleSubmission;
  