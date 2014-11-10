app.service('GenericHelpers', function () {

    //returns our list
    this.list = function (gmp3) {
        var properties = { SampleName: "", SameConc: "", VectorName: '', LengthBases: "", PrimerName: "", PrimerConc: "", GMP3: gmp3 };
        return properties;
    }
    this.custom = function (scope,purification,gmp3) {
        var properties = { PrimerName: "", Scale: scope, ScaleValue: "", Sequence: '', Purification: purification, GMP: gmp3, GmpValue: "" };
        return properties;
    }
    this.oligonucleotideRow = function (synthesisScale1Values, purification,finalDeliveryForm, gmp3) {
        var properties = { PrimerName: "", Qty: "", OligonucleotideSequence: '', SynthesisScale1: synthesisScale1Values,SynthesisScaleValue: "", Modification: "", Purification: purification,PurificationValue: "",FinalDeliveryForm: finalDeliveryForm,FinalDeliveryFormValue: "", GMP3: gmp3, GmpValue: "" };
        return properties;
    }
});
