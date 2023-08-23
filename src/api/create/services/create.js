'use strict';

/**
 * create service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::create.create');
