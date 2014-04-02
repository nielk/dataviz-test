'use strict';

describe('Directive: graph02', function () {

  // load the directive's module
  beforeEach(module('datavizApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<graph02></graph02>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the graph02 directive');
  }));
});
