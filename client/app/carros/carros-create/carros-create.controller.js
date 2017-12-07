'use strict';

(function(){

class CarrosCreateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('parqueaderoApp')
  .component('carrosCreate', {
    templateUrl: 'app/carros/carros-create/carros-create.html',
    controller: CarrosCreateComponent,
    controllerAs: 'carrosCreateCtrl'
  });

})();
