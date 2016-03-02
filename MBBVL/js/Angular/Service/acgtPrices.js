app.service('acgtPrices', function () {

    //returns our list
    this.list = function (gmp3) {
        var properties = { SampleName: "", SameCon: "", VectorName: '', Length: "", PrimerName: "", PrimerConc: "", GMP3: gmp3 };
        return properties;
    }
    this.custom = function (scope, purification, gmp3) {
        var properties = { PrimerName: "", Scale: scope, ScaleValue: "", Sequence: '', Purification: purification, GMP: gmp3, GmpValue: "" };
        return properties;
    }
   

    this.purificationPrices = function (value) {
        switch (value) {
            case "Desalted":
                return 0;

            case "Cartridge":
                return 20.00;

            case "HPLC":
                return 50.00;
            case "PAGE":
                return 75.00;
            default:
                return 'undefined';
        }
    }
    this.convertSynsithisScale = function(value) {
        switch (value) {
            case "0.02":
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
