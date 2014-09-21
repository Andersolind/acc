var app = angular.module('acgt', []);
app.controller("PriceList", ['$scope', '$http', function ($scope, $http) {
    //Select scale 

    $scope.list_categories = { data: [{ id: '0.02', name: '0.02' }, { id: '0.04', name: '0.04' }, { id: '0.2', name: '0.2' }, { id: '1', name: '1' }] };
    $scope.list_purification = [{ id: 'RP Cartridge', name: 'RP Cartridge' }, { id: 'Desalt', name: 'Desalt' }];
    $scope.pricePerBase;
    $scope.purificationCost;
    $scope.numberOfBasis;
    $scope.txtTotal;
    $scope.createCalculations = function (value) {

        if (value == "0.02") {
            $scope.pricePerBase = "0.29";
        }
        if (value == "0.04") {
            $scope.pricePerBase = "0.5";
        }
        if (value == 0.2) {
            $scope.pricePerBase = "1";
        }

    };
    $scope.createPurificationCost = function (value) {
        if (value.id == "RP Cartridge") {
            $scope.purificationCost = "20";
        }
        else {
            $scope.purificationCost = "0";
        }
    }
    $scope.oligoSynthesisCalculation= function (value) {
        //Basis X price per base 
        var equation = value * $scope.pricePerBase;
        $scope.oligoSynthesisCost = equation;
        $scope.txtTotal = $scope.purificationCost + $scope.pricePerBase;

    }
    $scope.totalCalculation = function (value) {
        //price per base  + purification
        var equation = value * $scope.pricePerBase;
        $scope.oligoSynthesisCost = equation;

    }


    //$scope.numberOfBasis = function()
    //{
    //    $scope.oligoSynthesisCost;
    //}
}]);