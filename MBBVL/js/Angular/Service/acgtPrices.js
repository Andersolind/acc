app.service('acgtPrices', function () {


    var dasaltValues = [{ type: '0.02', value: '0.29' }
           , { type: '0.04', value: '0.05' }
           , { type: '0.2', value: '1.00' }
           , { type: '1', value: '3.00' }];
    //returns our list
    this.list = function (gmp3) {
        var properties = { SampleName: "", SameCon: "", VectorName: '', Length: "", PrimerName: "", PrimerConc: "", GMP3: gmp3 };
        return properties;
    }
    this.custom = function (scope, purification, gmp3) {
        var properties = { PrimerName: "", Scale: scope, ScaleValue: "", Sequence: '', Purification: purification, GMP: gmp3, GmpValue: "" };
        return properties;
    }

    // this.desaltPurification = { '0.29', '0.50', };
    this.desaltPurification = function ()
    {
        // Always the length of the oligo
        var dasaltValues =  [{ type: '0.02', value: '0.29' }
            , { type: '0.04', value: '0.05' }
            ,{ type: '0.2', value: '1.00' }
            ,{ type: '1', value: '3.00' }];

        // var desaltFormula =   ['0.29', '0.50', '1.00', '3.00'];
        return dasaltValues;
    }
   
        var cartridgeValues =  [{ type: '0.02', value: '20.29' }
             , { type: '0.04', value: '20.05' }
             ,{ type: '0.2', value: '21.00' }
             ,{ type: '1', value: '33.00' }];

        // Always the length of the oligo
        var hplcValues =  [{ type: '0.02', value: 'N/A' }
             , { type: '0.04', value: '50.50' }
             ,{ type: '0.2', value: '61.00' }
             ,{ type: '1', value: '93.00' }];
 
   
   
        // Always the length of the oligo
        var pageValues =  [{ type: '0.02', value: 'N/A' }
             , { type: '0.04', value: 'N/A' }
             ,{ type: '0.2', value: '76.00' }
             ,{ type: '1', value: '103.00' }];
  
   
    //purification && synthesis
    this.calculatePrices = function (purification, synthesis) {

        var result = "";
        switch (purification) {
            case "Desalted":
                angular.forEach(dasaltValues, function (value, key) {
                    //if synthesis == key
                    if (synthesis === value.type) {
                        result = value.value;
                    }
                }, result);
                return result;

            case "Cartridge":

                angular.forEach(cartridgeValues, function (value, key) {
                    //if synthesis == key
                    if (synthesis === value.type) {
                        result = value.value;
                    }
                }, result);
                return result;

            case "HPLC":

                angular.forEach(hplcValues, function (value, key) {
                    //if synthesis == key
                    if (synthesis === value.type) {
                        result = value.value;
                    }
                }, result);
                return result;
            case "PAGE":

                angular.forEach(pageValues, function (value, key) {
                    //if synthesis == key
                    if (synthesis === value.type) {
                        result = value.value;
                    }
                }, result);
                return result;
            default:
                return 'undefined';
        }
    }
    //We need the Purification and Synthesis
    this.convertSynsithisScale = function (purification, synthesis) {
        //We need to map the price for the synthesis 
        switch (value) {
            case "0.02":
                //Need to loop through the array to find out which purification
               // if (purification ==)
                return 0.29;

            case "0.04":
                return 0.50;
           
            case "0.2":
                return 1.00;
            case "1":
                return 3.00;
            default:
                return 'undefined';
        }
    }

    
});
