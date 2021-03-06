// Karma configuration
// Generated on Wed Dec 20 2017 19:40:46 GMT-0200 (-02)

var appConfig = require('./config');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'fixture'],


    // list of files / patterns to load in the browser
    files: [
      'lib/*.js',
      'spec/**/*.spec.js',
      {pattern: 'spec/fixtures/**/*'}
    ],


    // list of files to exclude
    exclude: [
      '**/*swp'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: appConfig.karma.preprocessors,

    jsonFixturesPreprocessor: {
      variableName: '__json__'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: appConfig.karma.reporters,


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: appConfig.karma.autoWatch,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: appConfig.karma.browsers,


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: appConfig.karma.singleRun,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
