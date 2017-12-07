'use strict';

(function(){

class ParqueaderoCreateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('parqueaderoApp')
  .component('parqueaderoCreate', {
    templateUrl: 'app/parqueadero/parqueadero-create/parqueadero-create.html',
    controller: ParqueaderoCreateComponent,
    controllerAs: 'parqueaderoCreateCtrl'
  });

})();
