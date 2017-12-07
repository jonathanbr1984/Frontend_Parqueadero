'use strict';

(function() {

  class MainController {

    constructor() {}

    $onInit() {}
  }

  angular.module('parqueaderoApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      comtrollerAs: 'vm'
    });
})();
