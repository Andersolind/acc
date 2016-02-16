app.controller("MockCtrl", [
    '$scope','$rootScope', '$http', function($scope,$rootScope, $http, GenericHelpers, ACGTFactory) {

        //
        var vm = this;
      
        vm.turnBillingOff = function () {
            //Set all the form values to not enabled
            $rootScope.dnaForm.txtFirstName.$setValidity('required', false);
           
        }
        //
    }]);