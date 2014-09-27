'use strict';
var path = require('path');
var _ = require('lodash');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var base = {
  app: {
    root: path.normalize(__dirname + '/..'),
    env: env
  }
};

var specific = {
  development: {
    app: {
      port: 3000,
      name: 'nestpad - dev'
    },
    mongo: {
      url: 'mongodb://localhost/nestpad_dev',
    }
  },
  test: {
    app: {
      port: 3001,
      name: 'nestpad - test'
    },
    mongo: {
      url: 'mongodb://localhost/nestpad_test',
    }
  },
  production: {
    app: {
      port: process.env.PORT || 3000,
      name: 'nestpad'
    },
    mongo: {
      url: 'mongodb://localhost/nestpad',
    }
  }
};

module.exports = _.merge(base, specific[env]);