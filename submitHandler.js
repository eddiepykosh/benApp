// submitHandler.js
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;

function getSelectedRadioButton(req) {
  const selectedRadio = req.query.radio; // Get the value of "radio" from the request query string
  // console.log(new Date().toISOString() + ' - ' + 'Button Selected:', selectedRadio)
  return selectedRadio;
}
// This function will be called when the "btnSubmit" button is clicked
function handleSubmission(text, req, selectedRadioValue, res) {
  // Log the content of the "textbox" to the console
  console.log(new Date().toISOString() + ' - ' + 'Textbox content:', text);

  // Get the requester's IP address from the request object
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(new Date().toISOString() + ' - ' + 'Requester IP Address:', ipAddress);

  // Regular expression to validate 10-digit phone numbers
  const phoneRegex = /^\d{10}$/;

  // Check if the input text matches the phone number format
  if (!phoneRegex.test(text)) {
    console.log(new Date().toISOString() + ' - ' + 'Bad number');
    res.status(400).json({ error: 'Invalid phone number. Please enter a 10-digit number in the following format: 2675551234' });
    return true; // Exit the function if the phone number is invalid
  }
  
  //const selectedRadioValue = getSelectedRadioButton(req);
  let soundURL;

  // Check the selected radio button value and perform actions accordingly
  if (selectedRadioValue === 'optionBen') {
    // Handle the "Ben" option
    console.log(new Date().toISOString() + ' - ' + 'Selected option: Ben');
    soundURL = 'https://files.pykosh.com/files/ben%20files/ben_generic.mp3';

  } else if (selectedRadioValue === 'optionLaugh') {
    console.log(new Date().toISOString() + ' - ' + 'Selected option: Huh huh huhhhh');
    soundURL = 'https://files.pykosh.com/files/ben%20files/ben_laugh.mp3';

  } else if (selectedRadioValue === 'optionNo') {
    console.log(new Date().toISOString() + ' - ' + 'Selected option: No');
    soundURL = 'https://files.pykosh.com/files/ben%20files/ben_no.mp3';

  } else if (selectedRadioValue === 'optionYes') {
    console.log(new Date().toISOString() + ' - ' + 'Selected option: Yesssss');
    soundURL = 'https://files.pykosh.com/files/ben%20files/ben_yes.mp3';

  } else if (selectedRadioValue === 'optionGrunt') {
    console.log(new Date().toISOString() + ' - ' + 'Selected option: Grrr');
    soundURL = 'https://files.pykosh.com/files/ben%20files/ben_grunt.mp3';

  } else if (selectedRadioValue === 'optionSharon') {
    console.log(new Date().toISOString() + ' - ' + 'Selected option: Sharon');
    soundURL = 'https://files.pykosh.com/files/ben%20files/sharon.mp3';

  } else {
    // Handle cases where the selectedRadioValue does not match any known option
    console.log(new Date().toISOString() + ' - ' + 'Invalid option selected.');
  }

  // You can add any other server-side logic here if needed
  
  client.calls
    .create({
      url: soundURL,
      from: phoneNumber,
      to: text,
      method: 'GET'
    })
    .then(call => console.log(new Date().toISOString() + ' - ' + 'Call submitted to: ' + phoneNumber + ' with SID: ' + call.sid));
  
}

module.exports = {
  handleSubmission,
  getSelectedRadioButton
};

  