app.service('GenericHelpers', function () {

    //returns our list
    this.list = function () {
        var properties = { SampleName: "", SameConc: "", VectorName: '', LengthBases: "", PrimerName: "", PrimerConc: "", GMP3: createGmp3 };
        return properties;
    }
 
    this.createGmp3 = function () {
        var Gmp3 = [{ name: 'Yes', value: 'Yes' }, { name: 'No', value: 'No' }];
        return Gmp3;
    }

});
