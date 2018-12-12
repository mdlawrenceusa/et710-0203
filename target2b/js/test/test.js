describe('directives', function(){

  beforeEach(module('AppMarketApp'));
  beforeEach(module('js/directives/appInfo.html'));

  beforeEach(inject(function($rootScope, $compile, $injector) {
    elm = angular.element("<app-info info='info'></app-info>");

    scope = $rootScope;
    scope.info = {icon: "https://www.google.com/images/srpr/logo11w.png", title: "hello", developer: "kelvin", price: 19};

    $compile(elm)(scope);
    scope.$digest();
  }));

  it('Did you make a directive named appInfo?', inject(function($controller) {
    expect(elm.hasClass('ng-isolate-scope')).toBeTruthy();
  }));

});
