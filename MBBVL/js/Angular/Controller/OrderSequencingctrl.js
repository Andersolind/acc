app.controller("OrderSequencing", ['$scope', '$http', 'GenericHelpers', 'ACGTFactory', function ($scope, $http, GenericHelpers, ACGTFactory) {

    $scope.scale = [{ name: '0.02', value: '0.02' }, { name: '0.04', value: '0.04' }, { name: '0.2', value: '0.2' }, { name: '1', value: '1' }];
    //
    $scope.purification = [{ name: 'Desalted', value: 'Desalted' }, { name: 'Rp-Cartidge', value: 'Rp-Cartidge' }];

    $scope.gmp3 = [{ name: 'yes', value: 'yes' }, { name: 'no', value: 'no' }];
    //Dna Form
    $scope.NavigationConfig = [{ SampleName: "", SameConc: "", VectorName: '', LengthBases: "", PrimerName: "", PrimerConc: "", GMP3: $scope.gmp3 }];

    //Check box values
    $scope.formData = {};


    $scope.AddSampleRow = function () {
        //Push a new row
        $scope.NavigationConfig.push(GenericHelpers.list($scope.gmp3));
    };


    $scope.CustomPrimer = [{ PrimerName: "", Scale: $scope.scale, Sequence: '', Purification: $scope.purification, GMP: $scope.gmp3 }];


    $scope.AddCustomPrimer = function () {
        //Push a new row
        $scope.CustomPrimer.push(GenericHelpers.custom($scope.scale, $scope.purification, $scope.gmp3));
    };

    $scope.submitForm = function () {
        //Get all the form variables from the page and get ready to submit to our model
        var url = "/api/Sequence/"
        ACGTFactory.serverService(url, "GET", "").success(function (data, status) {
            if (status == 200) {
              //  ResetReportEdit($scope.OldReportId);
             //   SetAlert("Updated", 'success');
            }
        }).error(function (error) {
            var err = error;
         //   SetAlert(error, 'error');
        });

    }


}]);