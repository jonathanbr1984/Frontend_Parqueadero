'use strict';

describe('Component: CarrosCreateComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoApp'));

  var CarrosCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CarrosCreateComponent = $componentController('carros-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
