'use strict';

/**
 * watering-record service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::watering-record.watering-record');
