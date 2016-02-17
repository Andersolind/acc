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

    this.country_list = function () {
        var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas"
		, "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands"
		, "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica"
		, "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea"
		, "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana"
		, "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India"
		, "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia"
		, "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania"
		, "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia"
		, "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"
		, "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles"
		, "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan"
		, "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia"
		, "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)"
		, "Yemen", "Zambia", "Zimbabwe"];
        return countries;
    }
});
