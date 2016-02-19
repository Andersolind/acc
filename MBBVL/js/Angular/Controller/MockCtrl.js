app.controller("MockCtrl", ['$scope', '$http', 'GenericHelpers', 'ACGTFactory', '$rootScope', function ($scope, $http, GenericHelpers, ACGTFactory, $rootScope) {

    //
    var vm = this;
    setupInitialRows();
    //Create a new row
    vm.AddOligonucleotideRow = function () {
        //Push a new row
        vm.OligonucleotideRow.push(GenericHelpers.oligonucleotideRow(vm.synthesisScale1Values, vm.purification, $scope.finalDeliveryForm, $scope.gmp3));
    };

    function setupInitialRows() {
        // we initializ all our values here
        vm.modificationList = GenericHelpers.modifications();
        vm.gmp3 = [{ name: 'yes', value: 'yes' }, { name: 'no', value: 'no' }];
        vm.synthesisScale1Values = [{ name: '0.02', value: '0.02' }, { name: '0.04', value: '0.04' }, { name: '0.2', value: '0.2' }, { name: '1', value: '1' }];
        //
        vm.purification = [{ name: 'Desalted', value: 'Desalted' }, { name: 'Rp-Cartidge', value: 'Rp-Cartidge' }];

        vm.finalDeliveryForm = [{ name: 'Liquid', value: 'Liquid' }, { name: 'Dry', value: 'Dry' }];
        vm.OligonucleotideRow = [{ OglioNumber: "", Qty: "", OligonucleotideSequence: '', SynthesisScale1: vm.synthesisScale1Values, SynthesisScaleValue: "", Modification: "", ModificationValue: "", FinalDeliveryForm: vm.finalDeliveryForm, FinalDeliveryFormValue: "", Purification: vm.purification, PurificationValue: "", GMP3: vm.gmp3, GmpValue: "", Price: "" }];

    //    vm.OligonucleotideRow = [{ PrimerName: "", Qty: "", OligonucleotideSequence: '', SynthesisScale1: $scope.synthesisScale1Values, SynthesisScaleValue: "", Modification: "", ModificationValue: "", FinalDeliveryForm: $scope.finalDeliveryForm, FinalDeliveryFormValue: "", Purification: $scope.purification, PurificationValue: "", GMP3: $scope.gmp3, GmpValue: "", Price: "" }];
    }
}]);