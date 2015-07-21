angular.module('app')
  .config(function($routeProvider) {
    $routeProvider
      .when('/login', {
        controller: 'SessionCtrl',
        templateUrl: 'templates/sessions/login.html'
      })
      .when('/logout', {
        controller: 'SessionCtrl',
        templateUrl: 'templates/sessions/logout.html'
      })
      .when('/photos', {
        controller: 'PhotoIndexCtrl',
        templateUrl: 'templates/photos/index.html'
      })
      .when('/photos/new', {
        controller: 'PhotoNewCtrl',
        templateUrl: 'templates/photos/new.html'
      })


      .otherwise({redirectTo: '/login'});
  });