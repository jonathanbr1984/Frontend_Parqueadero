'use strict';

(function(){

class PuestosListComponent {
  constructor(puestosService, carrosService) {
    this.puestosService = puestosService;
    this.carrosService = carrosService;
  }

  $onInit(){
  	this.puestosService.query().$promise
  	.then(response => {
  		console.log("Puestos", response);
  		this.puesto = response;
  	})
  	.catch(err => {
  		console.log("Error", err);
  	})
  	this.carrosService.query().$promise
  	.then(response => {
  		console.log("Carro", response);
  		this.carro = response;
  	})
  	.catch(err => {
  		console.log("Error", err);
  	})
  }
}
PuestosListComponent.$inject = ['puestosService', 'carrosService']

angular.module('parqueaderoApp')
  .component('puestosList', {
    templateUrl: 'app/puestos/puestos-list/puestos-list.html',
    controller: PuestosListComponent,
    controllerAs: 'vm'
  });

})();
