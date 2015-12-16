'use strict';

module.exports = function karmaConfig(config) {
  config.set({
    basePath: '',
    frameworks: [
      'mocha',
      'browserify'
    ],
    files: [
      'src/**/*.js',
      'test/**/*.js'
    ],
    preprocessors: {
      'src/**/*.js': 'browserify',
      'test/**/*.js': 'browserify'
    },
    browserify: {
      debug: true,
      transform: [
        [
          'babelify',
          {
            presets: 'es2015'
          }
        ],
        'browserify-ngannotate',
        require('browserify-istanbul')
      ]
    },
    reporters: [
      'mocha',
      'coverage'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS2'],
    singleRun: false,
    concurrency: require('os')
      .cpus().length,
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {
          type: 'html'
        },
        {
          type: 'text-summary'
        }
      ]
    }
  });
};
