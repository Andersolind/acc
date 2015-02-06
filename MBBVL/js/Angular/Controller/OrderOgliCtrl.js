app.controller("OrderOgli", ['$scope', '$http', 'GenericHelpers', 'ACGTFactory', function ($scope, $http, GenericHelpers, ACGTFactory) {

    SetupInitialRows();
    SetUpDatePicker();
    //Check box values
    CreateKeyPress();

    function SetupInitialRows() {
        $scope.gmp3 = [{ name: 'yes', value: 'yes' }, { name: 'no', value: 'no' }];
        $scope.synthesisScale1Values = [{ name: '0.02', value: '0.02' }, { name: '0.04', value: '0.04' }, { name: '0.2', value: '0.2' }, { name: '1', value: '1' }];
        //
        $scope.purification = [{ name: 'Desalted', value: 'Desalted' }, { name: 'Rp-Cartidge', value: 'Rp-Cartidge' }];

        $scope.finalDeliveryForm = [{ name: 'Liquid', value: 'Liquid' }, { name: 'Dry', value: 'Dry' }];

        $scope.OligonucleotideRow = [{ PrimerName: "", Qty: "", OligonucleotideSequence: '', SynthesisScale1: $scope.synthesisScale1Values, SynthesisScaleValue: "", Modification: "", FinalDeliveryForm: $scope.finalDeliveryForm, FinalDeliveryFormValue: "", Purification: $scope.purification, PurificationValue: "", GMP3: $scope.gmp3, GmpValue: "",Price:"" }];
    }
    //Send these values into the db
    $scope.AddOligonucleotideRow = function () {
        //Push a new row
        $scope.OligonucleotideRow.push(GenericHelpers.oligonucleotideRow($scope.synthesisScale1Values, $scope.purification, $scope.finalDeliveryForm, $scope.gmp3));
    };
    $scope.WrapperModel = {
        Billing: {},
        Shipping: {},
        Oligosequence: $scope.OligonucleotideRow
    };
    function CreateKeyPress() {
        //Tracks the GMP key press value
        $scope.keyPressDnaGmp = function (index, value) {
            $scope.OligonucleotideRow[index].GmpValue = value;
        };
        //synthesisScale1Values Key press values
        $scope.keyPressSynthesisScale1Values = function (index, value) {
            $scope.OligonucleotideRow[index].SynthesisScaleValue = value;
        };

        $scope.keyPressFinalDeliveryForm = function (index, value) {
            $scope.OligonucleotideRow[index].FinalDeliveryFormValue = value;
        };

        $scope.keyPressPurification = function (index, value) {
            $scope.OligonucleotideRow[index].PurificationValue = value;
        };
    }

    $scope.submitForm = function () {
        //Get all the form variables from the page and get ready to submit to our model
        var url = "/api/Oligosequence/";

        var model = $scope.WrapperModel;
        ACGTFactory.serverService(url, "Post", model).success(function (model, status) {
            if (status == 200) {
                window.location = "/home/thankyou";
            }
        }).error(function (error) {
            var err = error;
        });
    };
    function SetUpDatePicker() {
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
    }
    //Delivery check

    for (var i = 0; i < $scope.OligonucleotideRow.length; i++) {
        $scope.$watch('OligonucleotideRow[' + i + ']', function (changed) {

            ///  (QTY) * [ (Sequence) * (synthesis scale) + (Purification) ]
            alert(changed.Qty);
            alert(changed.OligonucleotideSequence);
            alert(changed.SynthesisScale1[0].name);
        }, true);
    }

}]);

