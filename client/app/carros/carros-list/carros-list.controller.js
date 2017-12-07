'use strict';

(function(){

class CarrosListComponent {
  constructor(carrosService) {
    this.carrosService = carrosService;
  }
  $onInit(){
  	this.carrosService.query().$promise
  	.then(response => {
  		console.log("Carros", response);
  		this.carro = response;
  	})
  	.catch(err => {
  		console.log("Error", err);
  	})
  }
}
CarrosListComponent.$injecto = ['carrosService']

angular.module('parqueaderoApp')
  .component('carrosList', {
    templateUrl: 'app/carros/carros-list/carros-list.html',
    controller: CarrosListComponent,
    controllerAs: 'vm'
  });

})();
