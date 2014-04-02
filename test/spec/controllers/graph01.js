'use strict';

describe('Controller: Graph01Ctrl', function () {

  // load the controller's module
  beforeEach(module('datavizApp'));

  var Graph01Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Graph01Ctrl = $controller('Graph01Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
