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

    this.newOligonucleotideRow = function (oglioNumber,fiveModifications, threeModifications, synthesisScale1Values, finalDeliveryForm, purification) {
        var properties = { OglioNumber: oglioNumber, Qty: "", OligonucleotideSequence: '', Five5Modifications: fiveModifications, InternalModification: threeModifications, ThreeModifications: threeModifications, SynthesisScale1: synthesisScale1Values, SynthesisScaleValue: "", Modification: "", ModificationValue: "", FinalDeliveryForm: finalDeliveryForm, FinalDeliveryFormValue: "", Purification: purification, PurificationValue: "", Price: "", NumberOfBases:0, GcContent: 0, TM: 0 };
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
    this.fiveModifications = function () {
        var getModificatons = [
            {
                name: 'Functional groups',
                items: [
                    { name: 'AminoC6', value: 'AminoC6' },
                    { name: 'Biotin', value: 'Biotin' },
                    { name: 'Biotin-TEG', value: 'Biotin-TEG' },
                    { name: 'Biotin-dT', value: 'Biotin-dT' },
                    { name: 'Carboxy-dT', value: 'Carboxy-dT' },
                    { name: 'DBCO-TEG', value: 'DBCO-TEG' },
                    { name: 'Phosphorylation', value: 'Phosphorylation' },
                    { name: 'Thiol', value: 'Thiol' }
                ]
            }, {
                name: 'Fluorophores',
                items: [
                    { name: 'Cy3™', value: 'Cy3™' },
                    { name: 'Cy3.5™', value: 'Cy3.5™' },
                    { name: 'Cy5™', value: 'Cy5™' },
                    { name: 'Cy5.5™', value: 'Cy5.5™' },
                    { name: '6FAM™', value: '6FAM™' },
                    { name: 'HEX™', value: 'HEX™' },
                    { name: 'TET™', value: 'TET™' }
                ]
            }
        ];


        return getModificatons;
    }

    this.internalModification = function () {
        var getModificatons = [
            {
                name: 'Functional groups',
                items: [
                    { name: 'AminoC6-dA', value: 'AminoC6-dA' },
                    { name: 'AminoC6-dC', value: 'AminoC6-dC' },
                    { name: 'Biotin-dT', value: 'Biotin-dT' }
                ]
            }, {
                name: 'Fluorophores',
                items: [
                    { name: 'Cy3™', value: 'Cy3™' },
                    { name: 'Cy5™', value: 'Cy5™' },
                    { name: '6FAM™', value: '6FAM™' },
                    { name: '6FAM-dT™', value: '6FAM-dT™' },
                    { name: 'TET™', value: 'TET™' }
                ]
            },
            {
                name: 'Others',
                items: [
                    { name: 'dSpacer', value: 'dSpacer' },
                    { name: 'Spacer 9', value: 'Spacer 9' },
                    { name: 'Spacer 12', value: 'Spacer 12' },
                    { name: 'Spacer 18', value: 'Spacer 18' },
                    { name: '5-hydromethyl dC', value: '5-hydromethyl dC' },
                { name: '5-methyl-dC', value: '5-methyl-dC' },
                      { name: 'Phosphorothioation', value: 'Phosphorothioation' }
                ]
            }
        ];


        return getModificatons;
    }

    this.threeModifications = function () {
        var getModificatons = [
            {
                name: 'Functional groups',
                items: [
                    { name: 'AminoC7', value: 'AminoC7' },
                    { name: 'Biotin', value: 'Biotin' },
                    { name: 'Biotin-TEG', value: 'Biotin-TEG' }
                    
                ]
            }, {
                name: 'Fluorophores',
                items: [
                    { name: 'Cy3™', value: 'Cy3™' },
                    { name: 'Cy5™', value: 'Cy5™' },
                    { name: '6FAM™', value: '6FAM™' },
                    { name: 'TAMRA™', value: 'TAMRA™' }
                ]
            }
        ];


        return getModificatons;
    }
    this.country_list = function () {
        var countries = [
          { name: 'Canada', value: 'CA' },
           { name: 'United States', value: 'US' },
            { name: 'Afghanistan', value: 'AF' },
            { name: 'Åland Islands', value: 'AX' },
            { name: 'Albania', value: 'AL' },
            { name: 'Algeria', value: 'DZ' },
            { name: 'American Samoa', value: 'AS' },
            { name: 'AndorrA', value: 'AD' },
            { name: 'Angola', value: 'AO' },
            { name: 'Anguilla', value: 'AI' },
            { name: 'Antarctica', value: 'AQ' },
            { name: 'Antigua and Barbuda', value: 'AG' },
            { name: 'Argentina', value: 'AR' },
            { name: 'Armenia', value: 'AM' },
            { name: 'Aruba', value: 'AW' },
            { name: 'Australia', value: 'AU' },
            { name: 'Austria', value: 'AT' },
            { name: 'Azerbaijan', value: 'AZ' },
            { name: 'Bahamas', value: 'BS' },
            { name: 'Bahrain', value: 'BH' },
            { name: 'Bangladesh', value: 'BD' },
            { name: 'Barbados', value: 'BB' },
            { name: 'Belarus', value: 'BY' },
            { name: 'Belgium', value: 'BE' },
            { name: 'Belize', value: 'BZ' },
            { name: 'Benin', value: 'BJ' },
            { name: 'Bermuda', value: 'BM' },
            { name: 'Bhutan', value: 'BT' },
            { name: 'Bolivia', value: 'BO' },
            { name: 'Bosnia and Herzegovina', value: 'BA' },
            { name: 'Botswana', value: 'BW' },
            { name: 'Bouvet Island', value: 'BV' },
            { name: 'Brazil', value: 'BR' },
            { name: 'British Indian Ocean Territory', value: 'IO' },
            { name: 'Brunei Darussalam', value: 'BN' },
            { name: 'Bulgaria', value: 'BG' },
            { name: 'Burkina Faso', value: 'BF' },
            { name: 'Burundi', value: 'BI' },
            { name: 'Cambodia', value: 'KH' },
            { name: 'Cameroon', value: 'CM' },
          
            { name: 'Cape Verde', value: 'CV' },
            { name: 'Cayman Islands', value: 'KY' },
            { name: 'Central African Republic', value: 'CF' },
            { name: 'Chad', value: 'TD' },
            { name: 'Chile', value: 'CL' },
            { name: 'China', value: 'CN' },
            { name: 'Christmas Island', value: 'CX' },
            { name: 'Cocos (Keeling) Islands', value: 'CC' },
            { name: 'Colombia', value: 'CO' },
            { name: 'Comoros', value: 'KM' },
            { name: 'Congo', value: 'CG' },
            { name: 'Congo, The Democratic Republic of the', value: 'CD' },
            { name: 'Cook Islands', value: 'CK' },
            { name: 'Costa Rica', value: 'CR' },
            { name: 'Cote D\'Ivoire', value: 'CI' },
            { name: 'Croatia', value: 'HR' },
            { name: 'Cuba', value: 'CU' },
            { name: 'Cyprus', value: 'CY' },
            { name: 'Czech Republic', value: 'CZ' },
            { name: 'Denmark', value: 'DK' },
            { name: 'Djibouti', value: 'DJ' },
            { name: 'Dominica', value: 'DM' },
            { name: 'Dominican Republic', value: 'DO' },
            { name: 'Ecuador', value: 'EC' },
            { name: 'Egypt', value: 'EG' },
            { name: 'El Salvador', value: 'SV' },
            { name: 'Equatorial Guinea', value: 'GQ' },
            { name: 'Eritrea', value: 'ER' },
            { name: 'Estonia', value: 'EE' },
            { name: 'Ethiopia', value: 'ET' },
            { name: 'Falkland Islands (Malvinas)', value: 'FK' },
            { name: 'Faroe Islands', value: 'FO' },
            { name: 'Fiji', value: 'FJ' },
            { name: 'Finland', value: 'FI' },
            { name: 'France', value: 'FR' },
            { name: 'French Guiana', value: 'GF' },
            { name: 'French Polynesia', value: 'PF' },
            { name: 'French Southern Territories', value: 'TF' },
            { name: 'Gabon', value: 'GA' },
            { name: 'Gambia', value: 'GM' },
            { name: 'Georgia', value: 'GE' },
            { name: 'Germany', value: 'DE' },
            { name: 'Ghana', value: 'GH' },
            { name: 'Gibraltar', value: 'GI' },
            { name: 'Greece', value: 'GR' },
            { name: 'Greenland', value: 'GL' },
            { name: 'Grenada', value: 'GD' },
            { name: 'Guadeloupe', value: 'GP' },
            { name: 'Guam', value: 'GU' },
            { name: 'Guatemala', value: 'GT' },
            { name: 'Guernsey', value: 'GG' },
            { name: 'Guinea', value: 'GN' },
            { name: 'Guinea-Bissau', value: 'GW' },
            { name: 'Guyana', value: 'GY' },
            { name: 'Haiti', value: 'HT' },
            { name: 'Heard Island and Mcdonald Islands', value: 'HM' },
            { name: 'Holy See (Vatican City State)', value: 'VA' },
            { name: 'Honduras', value: 'HN' },
            { name: 'Hong Kong', value: 'HK' },
            { name: 'Hungary', value: 'HU' },
            { name: 'Iceland', value: 'IS' },
            { name: 'India', value: 'IN' },
            { name: 'Indonesia', value: 'ID' },
            { name: 'Iran, Islamic Republic Of', value: 'IR' },
            { name: 'Iraq', value: 'IQ' },
            { name: 'Ireland', value: 'IE' },
            { name: 'Isle of Man', value: 'IM' },
            { name: 'Israel', value: 'IL' },
            { name: 'Italy', value: 'IT' },
            { name: 'Jamaica', value: 'JM' },
            { name: 'Japan', value: 'JP' },
            { name: 'Jersey', value: 'JE' },
            { name: 'Jordan', value: 'JO' },
            { name: 'Kazakhstan', value: 'KZ' },
            { name: 'Kenya', value: 'KE' },
            { name: 'Kiribati', value: 'KI' },
            { name: 'Korea, Democratic People\'S Republic of', value: 'KP' },
            { name: 'Korea, Republic of', value: 'KR' },
            { name: 'Kuwait', value: 'KW' },
            { name: 'Kyrgyzstan', value: 'KG' },
            { name: 'Lao People\'S Democratic Republic', value: 'LA' },
            { name: 'Latvia', value: 'LV' },
            { name: 'Lebanon', value: 'LB' },
            { name: 'Lesotho', value: 'LS' },
            { name: 'Liberia', value: 'LR' },
            { name: 'Libyan Arab Jamahiriya', value: 'LY' },
            { name: 'Liechtenstein', value: 'LI' },
            { name: 'Lithuania', value: 'LT' },
            { name: 'Luxembourg', value: 'LU' },
            { name: 'Macao', value: 'MO' },
            { name: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' },
            { name: 'Madagascar', value: 'MG' },
            { name: 'Malawi', value: 'MW' },
            { name: 'Malaysia', value: 'MY' },
            { name: 'Maldives', value: 'MV' },
            { name: 'Mali', value: 'ML' },
            { name: 'Malta', value: 'MT' },
            { name: 'Marshall Islands', value: 'MH' },
            { name: 'Martinique', value: 'MQ' },
            { name: 'Mauritania', value: 'MR' },
            { name: 'Mauritius', value: 'MU' },
            { name: 'Mayotte', value: 'YT' },
            { name: 'Mexico', value: 'MX' },
            { name: 'Micronesia, Federated States of', value: 'FM' },
            { name: 'Moldova, Republic of', value: 'MD' },
            { name: 'Monaco', value: 'MC' },
            { name: 'Mongolia', value: 'MN' },
            { name: 'Montserrat', value: 'MS' },
            { name: 'Morocco', value: 'MA' },
            { name: 'Mozambique', value: 'MZ' },
            { name: 'Myanmar', value: 'MM' },
            { name: 'Namibia', value: 'NA' },
            { name: 'Nauru', value: 'NR' },
            { name: 'Nepal', value: 'NP' },
            { name: 'Netherlands', value: 'NL' },
            { name: 'Netherlands Antilles', value: 'AN' },
            { name: 'New Caledonia', value: 'NC' },
            { name: 'New Zealand', value: 'NZ' },
            { name: 'Nicaragua', value: 'NI' },
            { name: 'Niger', value: 'NE' },
            { name: 'Nigeria', value: 'NG' },
            { name: 'Niue', value: 'NU' },
            { name: 'Norfolk Island', value: 'NF' },
            { name: 'Northern Mariana Islands', value: 'MP' },
            { name: 'Norway', value: 'NO' },
            { name: 'Oman', value: 'OM' },
            { name: 'Pakistan', value: 'PK' },
            { name: 'Palau', value: 'PW' },
            { name: 'Palestinian Territory, Occupied', value: 'PS' },
            { name: 'Panama', value: 'PA' },
            { name: 'Papua New Guinea', value: 'PG' },
            { name: 'Paraguay', value: 'PY' },
            { name: 'Peru', value: 'PE' },
            { name: 'Philippines', value: 'PH' },
            { name: 'Pitcairn', value: 'PN' },
            { name: 'Poland', value: 'PL' },
            { name: 'Portugal', value: 'PT' },
            { name: 'Puerto Rico', value: 'PR' },
            { name: 'Qatar', value: 'QA' },
            { name: 'Reunion', value: 'RE' },
            { name: 'Romania', value: 'RO' },
            { name: 'Russian Federation', value: 'RU' },
            { name: 'RWANDA', value: 'RW' },
            { name: 'Saint Helena', value: 'SH' },
            { name: 'Saint Kitts and Nevis', value: 'KN' },
            { name: 'Saint Lucia', value: 'LC' },
            { name: 'Saint Pierre and Miquelon', value: 'PM' },
            { name: 'Saint Vincent and the Grenadines', value: 'VC' },
            { name: 'Samoa', value: 'WS' },
            { name: 'San Marino', value: 'SM' },
            { name: 'Sao Tome and Principe', value: 'ST' },
            { name: 'Saudi Arabia', value: 'SA' },
            { name: 'Senegal', value: 'SN' },
            { name: 'Serbia and Montenegro', value: 'CS' },
            { name: 'Seychelles', value: 'SC' },
            { name: 'Sierra Leone', value: 'SL' },
            { name: 'Singapore', value: 'SG' },
            { name: 'Slovakia', value: 'SK' },
            { name: 'Slovenia', value: 'SI' },
            { name: 'Solomon Islands', value: 'SB' },
            { name: 'Somalia', value: 'SO' },
            { name: 'South Africa', value: 'ZA' },
            { name: 'South Georgia and the South Sandwich Islands', value: 'GS' },
            { name: 'Spain', value: 'ES' },
            { name: 'Sri Lanka', value: 'LK' },
            { name: 'Sudan', value: 'SD' },
            { name: 'Suriname', value: 'SR' },
            { name: 'Svalbard and Jan Mayen', value: 'SJ' },
            { name: 'Swaziland', value: 'SZ' },
            { name: 'Sweden', value: 'SE' },
            { name: 'Switzerland', value: 'CH' },
            { name: 'Syrian Arab Republic', value: 'SY' },
            { name: 'Taiwan, Province of China', value: 'TW' },
            { name: 'Tajikistan', value: 'TJ' },
            { name: 'Tanzania, United Republic of', value: 'TZ' },
            { name: 'Thailand', value: 'TH' },
            { name: 'Timor-Leste', value: 'TL' },
            { name: 'Togo', value: 'TG' },
            { name: 'Tokelau', value: 'TK' },
            { name: 'Tonga', value: 'TO' },
            { name: 'Trinidad and Tobago', value: 'TT' },
            { name: 'Tunisia', value: 'TN' },
            { name: 'Turkey', value: 'TR' },
            { name: 'Turkmenistan', value: 'TM' },
            { name: 'Turks and Caicos Islands', value: 'TC' },
            { name: 'Tuvalu', value: 'TV' },
            { name: 'Uganda', value: 'UG' },
            { name: 'Ukraine', value: 'UA' },
            { name: 'United Arab Emirates', value: 'AE' },
            { name: 'United Kingdom', value: 'GB' },
           
            { name: 'United States Minor Outlying Islands', value: 'UM' },
            { name: 'Uruguay', value: 'UY' },
            { name: 'Uzbekistan', value: 'UZ' },
            { name: 'Vanuatu', value: 'VU' },
            { name: 'Venezuela', value: 'VE' },
            { name: 'Viet Nam', value: 'VN' },
            { name: 'Virgin Islands, British', value: 'VG' },
            { name: 'Virgin Islands, U.S.', value: 'VI' },
            { name: 'Wallis and Futuna', value: 'WF' },
            { name: 'Western Sahara', value: 'EH' },
            { name: 'Yemen', value: 'YE' },
            { name: 'Zambia', value: 'ZM' },
            { name: 'Zimbabwe', value: 'ZW' }
        ];
        return countries;
    }

    this.checkForSpecialCharacters = function (evt)
    {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
                return false;
            }
            return true;
    }



});
