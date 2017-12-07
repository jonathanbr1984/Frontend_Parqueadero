'use strict';

function carrosService($resource, API) {
	return $resource(API + '/api/carros/:id', {
		id: '@placaCarro'
	}, {
		update: {
			method: 'PUT'
		}
	});
}

carrosService.$inject = ['$resource', 'API']

angular.module('parqueaderoApp')
  .factory('carrosService', carrosService);
