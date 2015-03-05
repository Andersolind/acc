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
    $scope.keyPressDnaGmp = function (index, value) {
        $scope.NavigationConfig[index].GmpValue = value;
    };
    function SetupInitialRows() {
        $scope.scaleValues = [{ name: '0.02', value: '0.02' }, { name: '0.04', value: '0.04' }, { name: '0.2', value: '0.2' }, { name: '1', value: '1' }];
        //
        $scope.purification = [{ name: 'Desalted', value: 'Desalted' }, { name: 'Rp-Cartidge', value: 'Rp-Cartidge' }];

        $scope.gmp3 = [{ name: 'yes', value: 'yes' }, { name: 'no', value: 'no' }];
        //Dna Form
      
        $scope.selectedOption = 'no';
        $scope.NavigationConfig = [{ SampleName: "", SampleCon: "", VectorName: '', Length: "", PrimerName: "", PrimerConc: "", GMP3: $scope.gmp3, GmpValue: "" }];
        
        
       // $scope.CustomPrimer = [{ PrimerName: "", Scale: $scope.scaleValues, ScaleValue: "", Sequence: '', Purification: $scope.purification, GMP: $scope.gmp3[1], GmpValue: "" }];
        $scope.CustomPrimer = [{ PrimerName: "", Sequence: '' }];

        $scope.Modification = ["Biotin", "[bio]", "Amino C6", "[amC6]", "Phosphorylation", "[PO4]", "Fluorescein Phosphoramidite", "[FITC]", "6-FAM", "[6FAM]", "5-Methyl C", "[5MeC]", "CY5","[CY5]","Internal Spacer C9","[iSpC9]","Phosphorothioation","[thio]","CY3","[CY3]","Spacer 18","[iSpC18]"]

    }
    //Send these values into the db


    $scope.AddCustomPrimer = function (index, variable) {
        //Push a new row
        $scope.CustomPrimer.push(GenericHelpers.custom($scope.scaleValues, $scope.purification, $scope.gmp3));

    };


    $scope.DataDelivery = [{
        name: '($5.00) Unedited Sequence Results [Chromatogram Trace]',
        checked: false
    }, {
        name: '($10.00) Edited sequence results [Text Data]',
        checked: false
    }, {
        name: '($10.00) Edited Sequence Results [Text Data + Chromatogram Trace]',
        checked: true
    }, {
        name: '($5.00) Unedited Sequence Results [Text + Chromatogram Trace]',
        checked: false
    }];

    $scope.SequencingWrapperModel = {
        Billing: {},
        PickUp: {},
        DataDeliveryOptions: {},
        CustomPrimers: $scope.CustomPrimer,
        SequencingModel: $scope.NavigationConfig,
        IsShipping: $scope.Pickup,
        IsPrimer:$scope.Primers
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
        var url = "/api/Sequence/";
        var model = $scope.SequencingWrapperModel;
        $scope.disableSubmit = true;
       
        //
       
        angular.forEach($scope.DataDelivery, function (value, key) {
            if (value.checked) {
                $scope.DataDeliveryOptions = { Name: value.name, Value: value.checked };
              
            }
        });
        $scope.SequencingWrapperModel.IsPrimer = $scope.Primers;
        $scope.SequencingWrapperModel.IsShipping = $scope.Pickup,
        $scope.SequencingWrapperModel.DataDeliveryOptions = $scope.DataDeliveryOptions;
        var model = $scope.SequencingWrapperModel;
        ACGTFactory.serverService(url, "Post", model).success(function (model, status) {
            if (status == 200) {
                window.location = "/home/thankyou";
                
            }
        }).error(function (error) {
            var err = error;
            //   SetAlert(error, 'error');
        });
    };
    //Delivery check
    $scope.updateSelection = function (position, entities) {
        angular.forEach(entities, function (subscription, index) {
            if (position != index)
                subscription.checked = false;
        });
    }

    function GetTrueDelivery() {

    }
}]);

