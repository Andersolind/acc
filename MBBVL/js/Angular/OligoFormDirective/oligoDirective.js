/// <reference path="OligoDirective.html" />
app.directive('oligoForm', function () {
    return {
       templateUrl: '/OligoDirective.html',
    restrict: 'E',
  
    controller: 'oligoFormCtrl',
    controllerAs: 'oligoForm'
    };
});