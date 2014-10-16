app.controller("OrderSequencing", ['$scope', '$http', 'GenericHelpers', 'ACGTFactory', function ($scope, $http, GenericHelpers, ACGTFactory) {

    SetupInitialRows();

    //Check box values

    var formData = {};
    //Sample Row
    $scope.AddSampleRow = function () {
        //Push a new row
        $scope.NavigationConfig.push(GenericHelpers.list($scope.gmp3));
    };
    $scope.keyPressCustomPrimer = function (index, value) {
        $scope.CustomPrimer[index].ScaleValue = value;
    };
    $scope.keyPressGmp = function (index, value) {
        $scope.CustomPrimer[index].GmpValue = value;
    };
    function SetupInitialRows() {
        $scope.scaleValues = [{ name: '0.02', value: '0.02' }, { name: '0.04', value: '0.04' }, { name: '0.2', value: '0.2' }, { name: '1', value: '1' }];
        //
        $scope.purification = [{ name: 'Desalted', value: 'Desalted' }, { name: 'Rp-Cartidge', value: 'Rp-Cartidge' }];

        $scope.gmp3 = [{ name: 'yes', value: 'yes' }, { name: 'no', value: 'no' }];
        //Dna Form
        $scope.NavigationConfig = [{ SampleName: "", SameConc: "", VectorName: '', LengthBases: "", PrimerName: "", PrimerConc: "", GMP3: $scope.gmp3 }];
        //
        $scope.CustomPrimer = [{ PrimerName: "", Scale: $scope.scaleValues, ScaleValue: "", Sequence: '', Purification: $scope.purification, GMP: $scope.gmp3, GmpValue: "" }];
   
    }
    //Send these values into the db


    $scope.AddCustomPrimer = function (index, variable) {
        //Push a new row
        $scope.CustomPrimer.push(GenericHelpers.custom($scope.scaleValues, $scope.purification, $scope.gmp3));

    };

    $scope.SequencingWrapperModel = {

        Billing: {},
        Shipping: {},
        DataDeliveryOptions: {},
        CustomPrimers: $scope.CustomPrimer,
        SequencingModel: $scope.NavigationConfig,

    };
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.submitForm = function () {
        //Get all the form variables from the page and get ready to submit to our model
    
            var url = "/api/Sequence/"
         //   var test = $scope.CustomPrimer;
            var model = $scope.SequencingWrapperModel;
            ACGTFactory.serverService(url, "Post", model).success(function (model, status) {
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

// directive that prevents submit if there are still form errors  
