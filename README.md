# sample
Sample Project to show how not to write code

# To Setup
npm install

# To Run
npm start

# For Development
npm run debug

This project setups up an HTTP PUT endpoint at http://localhost:3000/api/log
Message body should be JSON encoded as { 'message': 'YOUR LOG STATEMENT'}
The app will console log the message, write the message to a log file and attempt to send it to Amazon Kinesis

* The Amazon Kinesis link has not been tested

## This code is not accetable as does not reflect good practice, don't use this code and don't use it as an example for anything.
