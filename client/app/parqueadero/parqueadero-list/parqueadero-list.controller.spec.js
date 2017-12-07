'use strict';

describe('Component: ParqueaderoListComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoApp'));

  var ParqueaderoListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ParqueaderoListComponent = $componentController('parqueadero-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
