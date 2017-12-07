'use strict';

(function(){

class ParqueaderoCreateComponent {
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
  		this.puesto = response;
  		console.log("Puesto", response);
  	})
  	.catch(err => {
  		console.log("Error", err);
  	})
  	this.carrosService.query().$promise
  	.then(response => {
  		this.carro = response;
  		console.log("Carro", response);
  	})
  	.catch(err => {
  		console.log("Error", err);
  	})
  }
  createParqueo(){
  	this.carrosService.save(this.carro).$promise
  	.then(response => {
  		console.log("Parqueo exitoso", response);
  	})
  	.catch(err => {
  		console.log("No se realizo parque", err);
  	})
  }
}
ParqueaderoCreateComponent.$inject = ['parqueaderoService', 'puestosService' , 'carrosService']

angular.module('parqueaderoApp')
  .component('parqueaderoCreate', {
    templateUrl: 'app/parqueadero/parqueadero-create/parqueadero-create.html',
    controller: ParqueaderoCreateComponent,
    controllerAs: 'parqueaderoCreateCtrl'
  });

})();
