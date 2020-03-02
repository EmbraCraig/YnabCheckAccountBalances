'use strict';
// get config file
require('dotenv').config();
const config = require('./config/config');

// get the server
const server = require('./server');

// server startup
server.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));
