# An idiotic project that calls people with sound bites from that [Talking Ben](https://apps.apple.com/us/app/talking-ben-the-dog/id416345319) meme.

# Features
- Password protection so you can control who uses the website

# What you'll need
- A Twilio API subscription with a phone number from Twilio
  - [Creating an Account](https://www.twilio.com/docs/messaging/build-your-account)
- Some basic Docker and Node.js understand
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
        image: 'eddiepykosh/thebenapp:v0.21'
        environment:
        - USERNAME=<username>
        - PASSWORD=<password>
        - TWILIO_ACCOUNT_SID=<SID>
        - TWILIO_AUTH_TOKEN=<Token>
        - TWILIO_PHONE_NUMBER=+<Phone Number from Twilio>
        ports:
            - '3000:3000'
```
- Or you can clone this Repo, setup your .env stuff and run server.js

# Things to Know
- You're REALLY gonna want to set a good username and password for this or else you'll be bankrupt to Twilio if someone finds it on the public internet
- Be default the server binds to 0.0.0.0 (all addresses) and port 3000 in server.js
 - Todo: Make them env values

# FAQ
- Why did you make this?
  - Honestly I have no idea
- Is there a public version of this app?
  - No - I would go bankrupt instantly from bot spam if it was discovered by a jerk
- Should I trust you?
  - Absolutely not.   

# More info to come later
- Current Todo:
  - ~~Phone number parsing~~
    - ~~Actually a priority to stop abuse~~
  - ~~Actually implement the ben sounds~~
  - ~~Redo the front end~~
  - Password hashing
  - ~~Dockerize~~
  - .ENV stuff???
  - get rid of helloworld.js
  - add real logging to a file

# Disclaimer Jargon
TLDR; This is a fun thing to use to mess with friends but don't be an idiot.

This GitHub repository contains code and instructions to set up a server and use it for specific purposes. It is important to understand that this application is provided "as-is," without warranties or guarantees of any kind.

I, ss the creator and maintainer of this repository, am not responsible for any harm, damages, or consequences resulting from the use of this code. The code provided here may interact with other systems, services, or APIs, and any usage, modification, or implementation of this code is entirely at your own risk.

Before deploying and using this server, I strongly advise you to review the code, understand its functionality, and ensure that it aligns with your intended use. Additionally, you should consider any legal and ethical implications associated with its use.

This application may process or transmit sensitive data, interact with third-party services, or perform other actions that could have security or privacy implications. It is your responsibility to implement appropriate security measures and comply with any relevant laws and regulations.

In no event shall I be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use this code.

By setting up and using this server, you acknowledge and agree to the terms of this disclaimer. If you do not agree with these terms, refrain from using or deploying this code.

Please think responsibly and exercise caution when setting up and using this server. If you have any doubts or concerns about its usage or implementation, seek advice from a qualified professional or refrain from using it altogether.

Remember, the responsibility for the proper use and consequences of this code lies solely with the user.

Thank you for your understanding.


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
