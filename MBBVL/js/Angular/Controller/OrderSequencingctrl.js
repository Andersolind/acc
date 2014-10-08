app.controller("OrderSequencing", ['$scope', '$http', 'GenericHelpers', function ($scope, $http, GenericHelpers) {

    //$scope.gmp3 = [{ name: 'yes', value: 'yes' }, { name: 'no', value: 'no' }];

    $scope.NavigationConfig = { SampleName: ""},{ SameConc: ""}, {VectorName: ''},{ LengthBases: ""},{ PrimerName: ""}, {PrimerConc: ""}, {GMP3: [{ name: 'yes', value: 'yes' }, { name: 'no', value: 'no' }]};
    //Add a new row 
    $scope.AddRow = function () {
        //Push a new row
        $scope.NavigationConfig.push(GenericHelpers.list());
    };

    //Select scale 

   
}]);