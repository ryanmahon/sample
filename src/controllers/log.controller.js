'use strict';
/*jshint unused: vars*/

const logService = require('../services/log.service');
const logger = require('../config/logger')('log.controller');

// POST /api/log
exports.log_message = (req, res, next) => {
    // TODO: Validate req body
    if(req.body.message) {
        logService.log(req.body.message);
        return res.send({'message':'received'});
    } else {
        return res.send({'error':'expect message JSON'})
    }

	
	
};