'use strict';

angular.module('parqueaderoApp', ['parqueaderoApp.constants', 
	'ngCookies', 
	'ngResource',
    'ngSanitize', 
    'ui.router', 
    'ui.bootstrap'
  ])
	.constant('API', 'http://localhost:8080/Parqueadero_backend')
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
