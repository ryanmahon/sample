'use strict';
const logController = require('../controllers/log.controller');

module.exports = (app) => {

    // TODO: should secure this endpoint
    app.route('/api/log')
        .post(logController.log_message);
    
};