'use strict';

/**
 * create controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::create.create');
