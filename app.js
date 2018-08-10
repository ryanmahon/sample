'use strict';
/*jshint unused: vars*/
const logger = require('./src/config/logger')('app');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const port = 3000;

// Express setup for json body processing
app.use(bodyParser.json());

// add routes for main endpoints
let routes = require('./src/routes/app.routes');
routes(app);

// catch 404 and forwarding to error handler
app.use((req, res, next) => {
	let err = new Error('Path Not Found: ' + req.path);
	err.status = 404;
	logger.warn('Path not found: ' + req.path);
	next(err);
});

// Error handler to log message & stack, returns JSON
app.use(function errorHandler(err, req, res, next) {
	let status = err.status || 500;
	if (err.status === 500) {
		logger.error(err.stack);
	}
	res.status(status);
	res.json({
		'error': err.name,
		'message': err.message
	});
});

module.exports = app.listen(port);

logger.debug('Server started on: ' + port);