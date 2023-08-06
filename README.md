# An idiotic project that calls people with sound bites from that [Talking Ben](https://apps.apple.com/us/app/talking-ben-the-dog/id416345319) meme.

# Features
- The power to annoy the hell out of your friends.
- Password protection so you can control who uses the website.

# What you'll need
- A Twilio API subscription with a phone number from Twilio
  - [Creating an Account](https://www.twilio.com/docs/messaging/build-your-account)
- Some basic Docker and Node.js understanding
  - Or just ask ChatGPT like I did for 90% of this
- A will to live
  - Sadly ChatGPT does not provide that    

# How to use/build
- Pull down the latest Docker Image from https://hub.docker.com/r/eddiepykosh/thebenapp
- Run the image however you may like.
- Here's an example compose file 
```
version: '3.9'
services:
    benapp:
        image: 'eddiepykosh/thebenapp:latest'
        environment:
        - USERNAME=<username>
        - PASSWORD=<password>
        - TWILIO_ACCOUNT_SID=<SID>
        - TWILIO_AUTH_TOKEN=<Token>
        - TWILIO_PHONE_NUMBER=+<Phone Number from Twilio>
        ports:
            - '2360:2360'
```
- Or you can clone this Repo, setup your .env stuff and run server.js

# Things to Know
- You're REALLY gonna want to set a good username and password for this or else you'll be bankrupt to Twilio if someone finds it on the public internet
- Be default the server binds to 0.0.0.0 (all addresses) and port 2360 (Aka Ben0 in T9) in server.js
- Because of the regex currently in use, this only works on 10 digit US phone numbers but in theory could work in other countries.
- I handle SSL at the reverse proxy level so SSL is not included in this project.

# FAQ
- Why did you make this?
  - Honestly I have no idea
- Is there a public version of this app?
  - No - I would go bankrupt instantly from bot spam if it was discovered by a jerk
- Should I trust you?
  - Absolutely not.   


# Disclaimer Jargon
**TLDR; This is a fun thing to use to mess with friends but don't be an idiot.** 

This project and its associated code are provided for educational and informational purposes only. The code is not intended to be used in a production environment, and I make no warranties or guarantees about its functionality, security, or reliability.

I am not responsible for any consequences or damages resulting from the use of this code, including but not limited to any actions taken based on the information or code provided. It is your responsibility to review and understand the code before using it and to use it responsibly and at your own risk.

Please use this code responsibly and be mindful of potential risks and security concerns. By using this code, you agree to assume all responsibility for its use and any potential consequences that may arise.

Remember, always exercise caution and best practices when using code from external sources, and never use it for any malicious or harmful purposes.

Thank you!


# License Stuff
MIT License

Copyright (c) 2023 Eddie Pykosh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
