'use strict';
require('dotenv').config();

const config = {
    PORT: process.env.PORT,
    COOKIESECRET: process.env.COOKIESECRET,
    MONGOOSE_CONNECTION_STRING: process.env.MONGOOSE_CONNECTION_STRING,
    AUTHSECRET: process.env.AUTHSECRET
};

module.exports = config;
