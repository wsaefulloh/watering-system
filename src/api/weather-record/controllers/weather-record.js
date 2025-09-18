'use strict';

/**
 * weather-record controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::weather-record.weather-record');
