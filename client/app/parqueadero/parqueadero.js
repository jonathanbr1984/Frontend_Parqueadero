'use strict';

angular.module('parqueaderoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parqueadero-list', {
        url: '/parqueadero-list',
        template: '<parqueadero-list></parqueadero-list>'
      })
      .state('parqueadero-create', {
        url: '/parqueadero-create',
        template: '<parqueadero-create></parqueadero-create>'
      });
  });
