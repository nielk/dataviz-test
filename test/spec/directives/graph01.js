'use strict';

describe('Directive: graph01', function () {

  // load the directive's module
  beforeEach(module('datavizApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<graph01></graph01>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the graph01 directive');
  }));
});
