angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('plugins', {
    url: '/page1',
    templateUrl: 'templates/plugins.html',
    controller: 'pluginsCtrl'
  })

  .state('device', {
    url: '/page2',
    templateUrl: 'templates/device.html',
    controller: 'deviceCtrl'
  })

  .state('deviceMotion', {
    url: '/page3',
    templateUrl: 'templates/deviceMotion.html',
    controller: 'deviceMotionCtrl'
  })

  .state('network', {
    url: '/page4',
    templateUrl: 'templates/network.html',
    controller: 'networkCtrl'
  })

  .state('deviceOrientation', {
    url: '/page5',
    templateUrl: 'templates/deviceOrientation.html',
    controller: 'deviceOrientationCtrl'
  })

.state('dialogs', {
    url: '/page6',
    templateUrl: 'templates/deviceDialogs.html',
    controller: 'dialogsCtrl'
  })




$urlRouterProvider.otherwise('/page1')

  

});