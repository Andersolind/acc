﻿app.controller("MockCtrl", ['$scope', '$http', 'GenericHelpers', 'ACGTFactory', '$rootScope', function ($scope, $http, GenericHelpers, ACGTFactory, $rootScope) {

    //
    var vm = this;
    var i = 1;
    vm.oligoNumber = i ++;
    setupInitialRows();
    //Create a new row
    vm.OligonucleotideRow = function () {
        //Push a new row
        vm.oligoNumber = i++;
        vm.NewOligonucleotideRow.push(GenericHelpers.newOligonucleotideRow(vm.oligoNumber,vm.fiveModifications, vm.threeModifications, vm.synthesisScale1Values, vm.finalDeliveryForm, vm.purification));
    };

    vm.removeRow = function (idx) {
        vm.oligoNumber = i--;
        vm.NewOligonucleotideRow.splice(idx, 1);
    };

    function setupInitialRows() {
        // we initializ all our values here
        vm.modificationList = GenericHelpers.modifications();
        vm.gmp3 = [{ name: 'yes', value: 'yes' }, { name: 'no', value: 'no' }];
        vm.synthesisScale1Values = [{ name: '0.02', value: '0.02' }, { name: '0.04', value: '0.04' }, { name: '0.2', value: '0.2' }, { name: '1', value: '1' }, { name: 'Other', value: 'Others - Inquire' }];
        //5ModificationValues
        vm.fiveModifications = GenericHelpers.fiveModifications();
        //Internal Modification
        vm.internalModification = GenericHelpers.internalModification();
        //Three Modifications 
        vm.threeModifications = GenericHelpers.threeModifications();
        //Increment a number 
       
        vm.purification = [{ name: 'Desalted', value: 'Desalted' }, { name: 'Cartridge', value: 'Cartridge' }, { name: 'HPLC', value: 'HPLC' }, { name: 'PAGE', value: 'PAGE' }];

        vm.finalDeliveryForm = [{ name: 'Liquid', value: 'Liquid-H2O' }, { name: 'Dry', value: 'Dry-Lyophilised' }];
        vm.NewOligonucleotideRow = [{ OglioNumber: vm.oligoNumber, Qty: "", OligonucleotideSequence: '', Five5Modifications: vm.fiveModifications, InternalModification: vm.threeModifications, ThreeModifications: vm.threeModifications, SynthesisScale1: vm.synthesisScale1Values, SynthesisScaleValue: "", Modification: "", ModificationValue: "", FinalDeliveryForm: vm.finalDeliveryForm, FinalDeliveryFormValue: "", Purification: vm.purification, PurificationValue: "", GMP3: vm.gmp3, GmpValue: "", Price: "" }];

    //    vm.OligonucleotideRow = [{ PrimerName: "", Qty: "", OligonucleotideSequence: '', SynthesisScale1: $scope.synthesisScale1Values, SynthesisScaleValue: "", Modification: "", ModificationValue: "", FinalDeliveryForm: $scope.finalDeliveryForm, FinalDeliveryFormValue: "", Purification: $scope.purification, PurificationValue: "", GMP3: $scope.gmp3, GmpValue: "", Price: "" }];
    }
}]);