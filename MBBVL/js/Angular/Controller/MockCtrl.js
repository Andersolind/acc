/// <reference path="MockCtrl.js" />
app.controller("MockCtrl", ['$scope', '$http', 'GenericHelpers', 'ACGTFactory', 'acgtPrices', 'OligoCalcUtilsService', 'ModifierService', '$window', 'alertsManager', function ($scope, $http, GenericHelpers, ACGTFactory, acgtPrices, OligoCalcUtilsService, ModifierService, $window, alertsManager) {

    //
    var vm = this;
    //Sets the form edit
    vm.hasSubmitted = false;
    //Alerts 
    vm.alerts = alertsManager.alerts;
    vm.isBilling = false;
    //Constants
    vm.validValues = ['b', 'v', 'n', 'a', 'g', 's', 't', 'v', 'k', 'r', 'h', 'w', 'n', 'm', 'c', 'd', 'y'];
    var i = 1;
    vm.oligoNumber = i++;
    setupInitialRows();
    //Create a new row
    vm.OligonucleotideRow = function () {
        //Push a new row
        vm.oligoNumber = i++;
        vm.NewOligonucleotideRow.push(GenericHelpers.newOligonucleotideRow(vm.oligoNumber, vm.fiveModifications, vm.threeModifications, vm.synthesisScale1Values, vm.finalDeliveryForm, vm.purification));
    };
    vm.WrapperModel = {
        Billing: {},
        Shipping: {},
        Oligosequence: vm.NewOligonucleotideRow
    };

    vm.removeRow = function (idx) {
        vm.oligoNumber = i--;
        vm.NewOligonucleotideRow.splice(idx, 1);
    };
    //Move this into a service
    //synthesisScale1Values Key press values
    vm.keyPressSynthesisScale1Values = function (index, value) {
        vm.NewOligonucleotideRow[index].SynthesisScaleValue = value;
    };
    //
    vm.keyPressFinalDeliveryForm = function (index, value) {
        vm.NewOligonucleotideRow[index].FinalDeliveryFormValue = value;
    };
    //
    vm.keyPressPurification = function (index, value) {
        vm.NewOligonucleotideRow[index].PurificationValue = value;
    };
    //Insert Text value for the five inch
    vm.fiveInchSequence = function (index, value) {
        //get the old oligo 
        //   var temp = vm.NewOligonucleotideRow[index].OligonucleotideSequence;
        // var mutatedvalue = '[' + value + ']' + temp;
        vm.NewOligonucleotideRow[index].fiveInchSequenceValue = value;
    }

    vm.threeInchSequence = function (index, value) {
        //get the old oligo 
        //   var temp = vm.NewOligonucleotideRow[index].OligonucleotideSequence;
        // var mutatedvalue = temp + '[' + value + ']';
        vm.NewOligonucleotideRow[index].threeInchValue = value;
    }


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
            vm.WrapperModel.Billing.PO = vm.WrapperModel.Shipping.PO;

        }
    }

    vm.getCursorPos = function ($event, index) {
        var myEl = $event.target;
        vm.doGetCaretPosition(myEl, index);
        //Set GC

        //   vm.nearestNeighbor(index);
    };

    vm.doGetCaretPosition = function (oField, index) {

        // Initialize
        var iCaretPos = 0;

        // IE Support
        if (document.selection) {

            // Set focus on the element
            oField.focus();

            // To get cursor position, get empty selection range
            var oSel = document.selection.createRange();

            // Move selection start to 0 position
            oSel.moveStart('character', -oField.value.length);

            // The caret position is selection length
            iCaretPos = oSel.text.length;
        }

            // Firefox support
        else if (oField.selectionStart || oField.selectionStart == '0')
            iCaretPos = oField.selectionStart;

        // Return results
        vm.NewOligonucleotideRow[index].oligoCarret = iCaretPos;
        vm.cursorPosVal = iCaretPos;
    };

    vm.setSelectionRange = function (input, selectionStart, selectionEnd) {
        if (input.setSelectionRange) {
            input.focus();
            input.setSelectionRange(selectionStart, selectionEnd);
        } else if (input.createTextRange) {
            var range = input.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selectionEnd);
            range.moveStart('character', selectionStart);
            range.select();
        }
        input.value += "test";
    };


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
        //Update length for Bases
        //Move to a service method..
        vm.NewOligonucleotideRow[index].NumberOfBases = newOglio.length;
        var tempValue = vm.NewOligonucleotideRow[index].OligonucleotideSequence;
        if (tempValue.indexOf("[") > 0) {
            var getBeforeSplit = tempValue.split("[")[0];
            var getAfterSplit = tempValue.split("]")[1];
            var endResult = getBeforeSplit + getAfterSplit;
            vm.NewOligonucleotideRow[index].OligonucleotideSequence = OligoCalcUtilsService.CheckBase(endResult);
            //
            var getFinalValues = ModifierService.DoOligoCalc(vm.NewOligonucleotideRow[index], vm.NewOligonucleotideRow[index].OligonucleotideSequence);
            vm.NewOligonucleotideRow[index].Tm = getFinalValues.neighbors;

            vm.NewOligonucleotideRow[index].GcContent = getFinalValues.gc;
           
            vm.NewOligonucleotideRow[index].OligonucleotideSequence = tempValue.toUpperCase();
        }
        else {
            vm.NewOligonucleotideRow[index].OligonucleotideSequence = OligoCalcUtilsService.CheckBase(vm.NewOligonucleotideRow[index].OligonucleotideSequence);
            var getFinalValues = ModifierService.DoOligoCalc(vm.NewOligonucleotideRow[index], vm.NewOligonucleotideRow[index].OligonucleotideSequence);

            vm.NewOligonucleotideRow[index].Tm = getFinalValues.neighbors;

            vm.NewOligonucleotideRow[index].GcContent = getFinalValues.gc;
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
        vm.NewOligonucleotideRow = [{ OglioNumber: vm.oligoNumber, Qty: "", OligonucleotideSequence: '', Five5Modifications: vm.fiveModifications, InternalModification: vm.threeModifications, ThreeModifications: vm.threeModifications, SynthesisScale1: vm.synthesisScale1Values, SynthesisScaleValue: "", Modification: "", ModificationValue: "", FinalDeliveryForm: vm.finalDeliveryForm, FinalDeliveryFormValue: "", Purification: vm.purification, PurificationValue: "", GMP3: vm.gmp3, GmpValue: "", Price: 'N/A', NumberOfBases: 0, GcContent: 0, Tm: 0, oligoCarret: '' }];
        vm.countriesList = GenericHelpers.country_list();

        //vm.itemSelected = vm.countriesList[5];

    }

    vm.submitForm = function () {

        //Get all the form variables from the page and get ready to submit to our model
        var url = "/api/Oligosequence/OligoInsert";
        //Disable the button
        // setAllInputsDirty($scope);
        $scope.dnaForm.$valid = false;
        $scope.dnaForm.$setPristine();
        $scope.dnaForm.submitted = false;
        var model = $scope.vm.WrapperModel;
        //Need to check for internal modifications 



        ACGTFactory.serverService(url, "Post", model).success(function (model, status) {
            if (status == 200) {
                window.location = "/home/thankyou";
            }
        }).error(function (error) {
            var err = error;
        });

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


    vm.keyPressInternalModification = function (index, value) {
        //append the text
        var elementName = 'OligonucleotideSequence' + index;
        vm.insertAtCursor(elementName, value, index);
 
    }
    vm.insertAtCursor = function (myField, myValue, index) {
        //IE support
        if (document.selection) {
            document.getElementById(myField).focus();
            sel = document.selection.createRange();
            sel.text = myValue;
        }
            //MOZILLA and others
        else if (document.getElementById(myField).selectionStart || document.getElementById(myField).selectionStart == '0') {
            var startPos = document.getElementById(myField).selectionStart;
            //We do not need to insert the internal modification if they have not selected a point in the oligo sequence..
            if (startPos == '0') {
                return false;
            }
            //If we made it this far we can track the internal modification
            vm.NewOligonucleotideRow[index].InternalModificationValue = myValue;
            var endPos = document.getElementById(myField).selectionEnd;
            var tempValue = document.getElementById(myField).value = document.getElementById(myField).value.substring(0, startPos) + '[' + myValue + ']'
                + document.getElementById(myField).value.substring(endPos, document.getElementById(myField).value.length);
            vm.NewOligonucleotideRow[index].OligonucleotideSequence = tempValue;

        } else {
            var tempValue = document.getElementById(myField).value += '[' + myValue + ']';
            vm.NewOligonucleotideRow[index].OligonucleotideSequence = tempValue;
        }
    };

    

    vm.validateOligo = function (value) {
        var key = value.keyCode || value.charCode;
    }

    vm.scrollTo = function () {
        vm.hasSubmitted = true;
        $window.scrollTo(0, 0);
        alertsManager.addAlert('Noooo!', 'alert-danger');
      
    }


}]);

app.factory('alertsManager', function () {
    return {
        alerts: {},
        addAlert: function (message, type) {
            this.alerts[type] = this.alerts[type] || [];
            this.alerts[type].push(message);
        },
        clearAlerts: function () {
            for (var x in this.alerts) {
                delete this.alerts[x];
            }
        }
    };
});