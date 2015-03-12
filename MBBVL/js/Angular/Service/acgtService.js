app.service('GenericHelpers', function () {

    //returns our list
    this.list = function (gmp3) {
        var properties = { SampleName: "", SameCon: "", VectorName: '', Length: "", PrimerName: "", PrimerConc: "", GMP3: gmp3 };
        return properties;
    }
    this.custom = function (scope, purification, gmp3) {
        var properties = { PrimerName: "", Scale: scope, ScaleValue: "", Sequence: '', Purification: purification, GMP: gmp3, GmpValue: "" };
        return properties;
    }
    this.oligonucleotideRow = function (synthesisScale1Values, purification, finalDeliveryForm, gmp3) {
        var properties = { PrimerName: "", Qty: "", OligonucleotideSequence: '', SynthesisScale1: synthesisScale1Values, SynthesisScaleValue: "", Modification: "", ModificationValue: "", Purification: purification, PurificationValue: "", FinalDeliveryForm: finalDeliveryForm, FinalDeliveryFormValue: "", GMP3: gmp3, GmpValue: "", Price: "" };
        return properties;
    }

    this.modifications = function () {
        var getModificatons = [{ name: 'Biotin', value: 'Biotin' }, { name: '[bio]', value: '[bio]' }, { name: 'Amino C6', value: 'Amino C6' },
            { name: '[amC6]', value: '[amC6]' },
            { name: 'Phosphorylation', value: 'Phosphorylation' },
            { name: '[PO4]', value: '[PO4]' },
            { name: 'Fluorescein Phosphoramidite', value: 'Fluorescein Phosphoramidite' },
            { name: '[FITC]', value: '[FITC]' }, { name: '6-FAM', value: '6-FAM' },
            { name: '5-Methyl C', value: '5-Methyl C' },
            { name: '[5MeC]', value: '[5MeC]' },
            { name: 'CY5', value: 'CY5' },
            { name: '[CY5]', value: '[CY5]' },
            { name: 'Internal Spacer C9', value: 'Internal Spacer C9' },
            { name: '[iSpC9]', value: '[iSpC9]' },
            { name: 'Phosphorothioation', value: 'Phosphorothioation' },
            { name: '[thio]', value: '[thio]' },
            { name: 'CY3', value: 'CY3' },
            { name: 'Spacer 18', value: 'Spacer 18' }];
        //["Biotin", "[bio]", "Amino C6", "[amC6]", "Phosphorylation", "[PO4]", "Fluorescein Phosphoramidite", "[FITC]", "6-FAM", "[6FAM]", "5-Methyl C", "[5MeC]", "CY5", "[CY5]", "Internal Spacer C9", "[iSpC9]", "Phosphorothioation", "[thio]", "CY3", "[CY3]", "Spacer 18", "[iSpC18]"]


        return getModificatons;
    }
});
