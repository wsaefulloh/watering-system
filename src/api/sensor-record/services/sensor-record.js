'use strict';

/**
 * sensor-record service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sensor-record.sensor-record');
