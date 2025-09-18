'use strict';

/**
 * weather-record service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::weather-record.weather-record');
