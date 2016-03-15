/// <reference path="MockCtrl.js" />
app.controller("MockCtrl", ['$scope', '$http', 'GenericHelpers', 'ACGTFactory', 'acgtPrices', function ($scope, $http, GenericHelpers, ACGTFactory, acgtPrices) {

    //
    var vm = this;
    vm.isBilling = false;

    var i = 1;
    vm.oligoNumber = i++;
    setupInitialRows();
    //Create a new row
    vm.OligonucleotideRow = function () {
        //Push a new row
        vm.oligoNumber = i++;
        vm.NewOligonucleotideRow.push(GenericHelpers.newOligonucleotideRow(vm.oligoNumber, vm.fiveModifications, vm.threeModifications, vm.synthesisScale1Values, vm.finalDeliveryForm, vm.purification));
    };

    vm.removeRow = function (idx) {
        vm.oligoNumber = i--;
        vm.NewOligonucleotideRow.splice(idx, 1);
    };


    vm.isShippingTheSame = function (isClicked) {

        if (isClicked) {

            vm.WrapperModel.Billing.Country = vm.WrapperModel.Shipping.Country;
            vm.WrapperModel.Billing.FirstName = vm.WrapperModel.Shipping.FirstName;
            vm.WrapperModel.Billing.LastName = vm.WrapperModel.Shipping.LastName;
            vm.WrapperModel.Billing.Institution = vm.WrapperModel.Shipping.Institution;
            vm.WrapperModel.Billing.BillingAddress = vm.WrapperModel.Shipping.ShippingAddress;
            vm.WrapperModel.Billing.PostalCode = vm.WrapperModel.Shipping.PostalCode;
            vm.WrapperModel.Billing.Phone = vm.WrapperModel.Shipping.Phone;
            vm.WrapperModel.Billing.Extention = vm.WrapperModel.Shipping.Extention;
            vm.WrapperModel.Billing.Email = vm.WrapperModel.Shipping.Email;
        }
    }


    //(QTY * [(Sequence) * (synthesis scale ) + (Purification)]
    vm.UserQuote = function (index, qty, sequence, synthesisscale, purification) {
        //If this null
        //1.Get the Purification ,synthesisscale and calculate the formula also need the length of the sequence
        var newOglio = sequence.replace(/ /g, '');

        if (qty != "" && sequence != "" && typeof synthesisscale != 'undefined' && typeof purification != 'undefined') {
            // //(QTY * [(Sequence) * (synthesis scale ) + (Purification)]
            var getPrice = acgtPrices.calculatePrices(purification, synthesisscale);
            if (getPrice == "N/A") {
                vm.NewOligonucleotideRow[index].Price = 'Not Valid';
            }
            else {
                vm.NewOligonucleotideRow[index].Price = qty * (newOglio.length * getPrice);
            }
           // var getNumber = qty * newOglio.length * acgtPrices.convertPurification(purification) + acgtPrices.convertSynsithisScale(synthesisscale);
        } else {
            vm.NewOligonucleotideRow[index].Price = 'Not Valid';
        }
    }

    function setupInitialRows() {
        vm.selectedValue = null;

        //Create a blank object for binding later
        vm.WrapperModel = {
            Billing: {},
            Shipping: {}
            //  Oligosequence: $scope.OligonucleotideRow
        };

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
        vm.NewOligonucleotideRow = [{ OglioNumber: vm.oligoNumber, Qty: "", OligonucleotideSequence: '', Five5Modifications: vm.fiveModifications, InternalModification: vm.threeModifications, ThreeModifications: vm.threeModifications, SynthesisScale1: vm.synthesisScale1Values, SynthesisScaleValue: "", Modification: "", ModificationValue: "", FinalDeliveryForm: vm.finalDeliveryForm, FinalDeliveryFormValue: "", Purification: vm.purification, PurificationValue: "", GMP3: vm.gmp3, GmpValue: "", Price: 'N/A' }];
        vm.countriesList = GenericHelpers.country_list();

        //vm.itemSelected = vm.countriesList[5];

    }

    vm.submitForm = function () {
        //Disable the button
       // setAllInputsDirty($scope);
        $scope.dnaForm.$valid = false;
        $scope.dnaForm.$setPristine();
        $scope.dnaForm.submitted = false;

        };
    function setAllInputsDirty(scope) {
        angular.forEach(scope, function (value, key) {
            // We skip non-form and non-inputs
            if (!value || value.$dirty === undefined) {
                return;
            }
            // Recursively applying same method on all forms included in the form
            if (value.$addControl) {
                return setAllInputsDirty(value);
            }
            // Setting inputs to $dirty, but re-applying its content in itself
            if (value.$setViewValue) {
                return value.$setViewValue(value.$viewValue);
            }
        });
    }


    vm.keyPressInternalModification = function(index,value) {
        //append the text
       vm.NewOligonucleotideRow[index].OligonucleotideSequence += value;
    }

}]);