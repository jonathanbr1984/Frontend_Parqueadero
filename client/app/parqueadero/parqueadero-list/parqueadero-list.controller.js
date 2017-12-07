'use strict';

(function(){

class ParqueaderoListComponent {
  constructor(parqueaderoService, puestosService, carrosService) {
    this.parqueaderoService = parqueaderoService;
    this.puestosService = puestosService;
    this.carrosService = carrosService;
    this.idParqueadero = 1;
  }
  $onInit(){
  	this.parqueaderoService.get({id: this.idParqueadero}).$promise
  	.then(response => {
  		this.parqueadero = response;
  		console.log("Parqueadero", response);
  	})
  	.catch(err => {
  		console.log("Error", err);
  	})
  	this.puestosService.query().$promise
  	.then(response => {
  		console.log("Puesto", response);
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
ParqueaderoListComponent.$inject = ['parqueaderoService', 'puestosService', 'carrosService']

angular.module('parqueaderoApp')
  .component('parqueaderoList', {
    templateUrl: 'app/parqueadero/parqueadero-list/parqueadero-list.html',
    controller: ParqueaderoListComponent,
    controllerAs: 'vm'
  });

})();
