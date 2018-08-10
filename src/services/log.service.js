'use strict';

const logger = require('../config/logger')('log.service');
var AWS = require('aws-sdk');
var firehoser = require('firehoser');

AWS.config.update({
    accessKeyId: 'VALUE',
    secretAccessKey: 'VALUE'
  });
   
const firehose = new firehoser.DeliveryStream('mobile-app-log');

module.exports.log = (message) => {
  

    logger.debug(`Received Message to log ${JSON.stringify(message)}`);
    // send to file
    logger.to_file(message);

    // send to kinesis    
    firehose.putRecord(message).catch((err) => {
        logger.error(JSON.stringify(err));
    });    
};