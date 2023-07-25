// submitHandler.js
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;

function getSelectedRadioButton(req) {
  const selectedRadio = req.query.radio; // Get the value of "radio" from the request query string
  console.log('Button Selected:', selectedRadio)
  return selectedRadio;
}
// This function will be called when the "btnSubmit" button is clicked
function handleSubmission(text, req) {
  // Log the content of the "textbox" to the console
  console.log('Textbox content:', text);

  // Get the requester's IP address from the request object
  const ipAddress = req.ip;
  console.log('Requester IP Address:', ipAddress);

  // Regular expression to validate 10-digit phone numbers
  const phoneRegex = /^\d{10}$/;

  // Check if the input text matches the phone number format
  if (!phoneRegex.test(text)) {
    console.log('Invalid phone number. Please enter a 10-digit number.');
    return; // Exit the function if the phone number is invalid
  }

  const selectedRadioValue = getSelectedRadioButton(req);

  // Check the selected radio button value and perform actions accordingly
  if (selectedRadioValue === 'optionBen') {
    // Handle the "Ben" option
    console.log('Selected option: Ben');
    // Add your logic here for the "Ben" option
  } else if (selectedRadioValue === 'optionLaugh') {
    console.log('Selected option: Huh huh huhhhh');

  } else if (selectedRadioValue === 'optionNo') {
    console.log('Selected option: No');

  } else if (selectedRadioValue === 'optionYes') {
    console.log('Selected option: Yesssss');
  } else if (selectedRadioValue === 'optionGrunt') {
    console.log('Selected option: Grrr');

  } else if (selectedRadioValue === 'optionRandom') {
    console.log('Selected option: Random');

  } else {
    // Handle cases where the selectedRadioValue does not match any known option
    console.log('Invalid option selected.');
  }

  // You can add any other server-side logic here if needed
  /*
  client.calls
    .create({
      url: 'http://demo.twilio.com/docs/classic.mp3',
      from: phoneNumber,
      to: text,
      method: 'GET'
    })
    .then(call => console.log(call.sid));
  */
}

module.exports = {
  handleSubmission,
  getSelectedRadioButton
};

  