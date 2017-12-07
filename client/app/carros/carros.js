'use strict';

angular.module('parqueaderoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('carros-list', {
        url: '/carros-list',
        template: '<carros-list></carros-list>'
      })
      .state('carros-create', {
        url: '/carros-create',
        template: '<carros-create></carros-create>'
      });
  });
