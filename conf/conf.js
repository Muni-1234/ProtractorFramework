//AllureReports:
var AllureReporter = require('C://Users//User//AppData//Roaming//npm//node_modules//protractor//node_modules//jasmine-allure-reporter');

// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['..//testcases//Calculator.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  
  //AllureReports:
   onPrepare: function() {
     jasmine.getEnv().addReporter(new AllureReporter({
       resultsDir: 'allure-results'
     }));
   },
 
   //Screenshots: Optional
   onPrepare: function () {
     jasmine.getEnv().addReporter(new AllureReporter());
     jasmine.getEnv().afterEach(function(done){
       browser.takeScreenshot().then(function (png) {
         allure.createAttachment('Screenshot', function () {
           return new Buffer(png, 'base64')
         }, 'image/png')();
         done();
       })
     });
   }

};