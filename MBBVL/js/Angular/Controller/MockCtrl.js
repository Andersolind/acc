app.controller("MockCtrl", ['$scope', '$http', 'GenericHelpers', 'ACGTFactory', '$rootScope', function ($scope, $http, GenericHelpers, ACGTFactory, $rootScope) {

    //
    var vm = this;
    vm.isBilling = false;
    setupInitialRows();
    //Create a new row
    vm.AddOligonucleotideRow = function () {
        //Push a new row
        vm.OligonucleotideRow.push(GenericHelpers.oligonucleotideRow(vm.synthesisScale1Values, vm.purification, $scope.finalDeliveryForm, $scope.gmp3));
    };

    vm.isBillingTheSame = function (value) {

        if (value) {

            vm.WrapperModel.Shipping.FirstName = vm.WrapperModel.Billing.FirstName;
            vm.WrapperModel.Shipping.LastName = vm.WrapperModel.Billing.LastName;
            vm.WrapperModel.Shipping.Institution = vm.WrapperModel.Billing.Institution;
            vm.WrapperModel.Shipping.Country = vm.WrapperModel.Billing.Country[2];
            vm.WrapperModel.Shipping.ShippingAddress = vm.WrapperModel.Billing.BillingAddress;
            vm.WrapperModel.Shipping.PostalCode = vm.WrapperModel.Billing.PostalCode;
            vm.WrapperModel.Shipping.Phone = vm.WrapperModel.Billing.BillingPhone;
            vm.WrapperModel.Shipping.Extention = vm.WrapperModel.Billing.Extention;
            vm.WrapperModel.Shipping.Email = vm.WrapperModel.Billing.Email;
        }
    }

    vm.changedValuesBilling = function (value) {
        vm.WrapperModel.Billing.Country = value;
    }
    vm.changedValuesShipping = function (value) {
        vm.WrapperModel.Shipping.Country = value;
    }


    function setupInitialRows() {
        //Create a blank object for binding later
        vm.WrapperModel = {
            Billing: {},
            Shipping: {}
            //  Oligosequence: $scope.OligonucleotideRow
        };
        //  vm.WrapperModel.Shipping.code = null;
        //  Oligosequence: $scope.OligonucleotideRow

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
        vm.purification = [{ name: 'Desalted', value: 'Desalted' }, { name: 'Cartridge', value: 'Cartridge' }, { name: 'HPLC', value: 'HPLC' }, { name: 'PAGE', value: 'PAGE' }];

        vm.finalDeliveryForm = [{ name: 'Liquid', value: 'Liquid-H2O' }, { name: 'Dry', value: 'Dry-Lyophilised' }];
        vm.OligonucleotideRow = [{ OglioNumber: "", Qty: "", OligonucleotideSequence: '', Five5Modifications: vm.fiveModifications, InternalModification: vm.threeModifications, ThreeModifications: vm.threeModifications, SynthesisScale1: vm.synthesisScale1Values, SynthesisScaleValue: "", Modification: "", ModificationValue: "", FinalDeliveryForm: vm.finalDeliveryForm, FinalDeliveryFormValue: "", Purification: vm.purification, PurificationValue: "", GMP3: vm.gmp3, GmpValue: "", Price: "" }];
        vm.countriesList = GenericHelpers.country_list();
        //    vm.OligonucleotideRow = [{ PrimerName: "", Qty: "", OligonucleotideSequence: '', SynthesisScale1: $scope.synthesisScale1Values, SynthesisScaleValue: "", Modification: "", ModificationValue: "", FinalDeliveryForm: $scope.finalDeliveryForm, FinalDeliveryFormValue: "", Purification: $scope.purification, PurificationValue: "", GMP3: $scope.gmp3, GmpValue: "", Price: "" }];
    }



}]);