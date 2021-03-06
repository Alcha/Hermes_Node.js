"use strict"

const moment = require('moment-timezone');
const config = require('./config.json');

// // ========================== Local functions =================================================== //
// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min) + min)
// };

// // ========================== Exported functions ================================================ //

// module.exports = {
//     getFormattedTimestamp: function () {
//         return moment().tz(config.defaultTimezone).format('HH:mm:ss MM/DD/YYYY');
//     }
// };

class tools {
    constructor (options) {
        this.options = options || {};
    };
    getFormattedTimestamp () {
        return moment().tz(config.defaultTimezone).format('HH:mm:ss MM/DD/YYYY');
    };
    getRandom (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
};

module.exports = tools