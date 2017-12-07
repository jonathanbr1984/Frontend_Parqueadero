'use strict';

describe('Component: ParqueaderoCreateComponent', function () {

  // load the controller's module
  beforeEach(module('parqueaderoApp'));

  var ParqueaderoCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ParqueaderoCreateComponent = $componentController('parqueadero-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
