app.service('GenericHelpers', function () {

    //returns our list
    this.list = function (gmp3) {
        var properties = { SampleName: "", SameConc: "", VectorName: '', LengthBases: "", PrimerName: "", PrimerConc: "", GMP3: gmp3 };
        return properties;
    }
    this.custom = function (scope,purification,gmp3) {
        var properties = { PrimerName: "", Scale: scope, Sequence: '', Purification: purification, GMP: gmp3 };
        return properties;
    }
 
    

});
