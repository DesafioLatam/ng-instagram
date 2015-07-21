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
        controller: 'PhotoCtrl',
        templateUrl: 'templates/photos/index.html'
      })
      .otherwise({redirectTo: '/login'});
  });