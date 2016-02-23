﻿app.service('GenericHelpers', function () {

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
        var properties = { OglioNumber: oglioNumber, Qty: "", OligonucleotideSequence: '', Five5Modifications: fiveModifications, InternalModification: threeModifications, ThreeModifications: threeModifications, SynthesisScale1: synthesisScale1Values, SynthesisScaleValue: "", Modification: "", ModificationValue: "", FinalDeliveryForm: finalDeliveryForm, FinalDeliveryFormValue: "", Purification: purification, PurificationValue: "", Price: "" };
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
            { name: 'Afghanistan', code: 'AF' },
            { name: 'Åland Islands', code: 'AX' },
            { name: 'Albania', code: 'AL' },
            { name: 'Algeria', code: 'DZ' },
            { name: 'American Samoa', code: 'AS' },
            { name: 'AndorrA', code: 'AD' },
            { name: 'Angola', code: 'AO' },
            { name: 'Anguilla', code: 'AI' },
            { name: 'Antarctica', code: 'AQ' },
            { name: 'Antigua and Barbuda', code: 'AG' },
            { name: 'Argentina', code: 'AR' },
            { name: 'Armenia', code: 'AM' },
            { name: 'Aruba', code: 'AW' },
            { name: 'Australia', code: 'AU' },
            { name: 'Austria', code: 'AT' },
            { name: 'Azerbaijan', code: 'AZ' },
            { name: 'Bahamas', code: 'BS' },
            { name: 'Bahrain', code: 'BH' },
            { name: 'Bangladesh', code: 'BD' },
            { name: 'Barbados', code: 'BB' },
            { name: 'Belarus', code: 'BY' },
            { name: 'Belgium', code: 'BE' },
            { name: 'Belize', code: 'BZ' },
            { name: 'Benin', code: 'BJ' },
            { name: 'Bermuda', code: 'BM' },
            { name: 'Bhutan', code: 'BT' },
            { name: 'Bolivia', code: 'BO' },
            { name: 'Bosnia and Herzegovina', code: 'BA' },
            { name: 'Botswana', code: 'BW' },
            { name: 'Bouvet Island', code: 'BV' },
            { name: 'Brazil', code: 'BR' },
            { name: 'British Indian Ocean Territory', code: 'IO' },
            { name: 'Brunei Darussalam', code: 'BN' },
            { name: 'Bulgaria', code: 'BG' },
            { name: 'Burkina Faso', code: 'BF' },
            { name: 'Burundi', code: 'BI' },
            { name: 'Cambodia', code: 'KH' },
            { name: 'Cameroon', code: 'CM' },
            { name: 'Canada', code: 'CA' },
            { name: 'Cape Verde', code: 'CV' },
            { name: 'Cayman Islands', code: 'KY' },
            { name: 'Central African Republic', code: 'CF' },
            { name: 'Chad', code: 'TD' },
            { name: 'Chile', code: 'CL' },
            { name: 'China', code: 'CN' },
            { name: 'Christmas Island', code: 'CX' },
            { name: 'Cocos (Keeling) Islands', code: 'CC' },
            { name: 'Colombia', code: 'CO' },
            { name: 'Comoros', code: 'KM' },
            { name: 'Congo', code: 'CG' },
            { name: 'Congo, The Democratic Republic of the', code: 'CD' },
            { name: 'Cook Islands', code: 'CK' },
            { name: 'Costa Rica', code: 'CR' },
            { name: 'Cote D\'Ivoire', code: 'CI' },
            { name: 'Croatia', code: 'HR' },
            { name: 'Cuba', code: 'CU' },
            { name: 'Cyprus', code: 'CY' },
            { name: 'Czech Republic', code: 'CZ' },
            { name: 'Denmark', code: 'DK' },
            { name: 'Djibouti', code: 'DJ' },
            { name: 'Dominica', code: 'DM' },
            { name: 'Dominican Republic', code: 'DO' },
            { name: 'Ecuador', code: 'EC' },
            { name: 'Egypt', code: 'EG' },
            { name: 'El Salvador', code: 'SV' },
            { name: 'Equatorial Guinea', code: 'GQ' },
            { name: 'Eritrea', code: 'ER' },
            { name: 'Estonia', code: 'EE' },
            { name: 'Ethiopia', code: 'ET' },
            { name: 'Falkland Islands (Malvinas)', code: 'FK' },
            { name: 'Faroe Islands', code: 'FO' },
            { name: 'Fiji', code: 'FJ' },
            { name: 'Finland', code: 'FI' },
            { name: 'France', code: 'FR' },
            { name: 'French Guiana', code: 'GF' },
            { name: 'French Polynesia', code: 'PF' },
            { name: 'French Southern Territories', code: 'TF' },
            { name: 'Gabon', code: 'GA' },
            { name: 'Gambia', code: 'GM' },
            { name: 'Georgia', code: 'GE' },
            { name: 'Germany', code: 'DE' },
            { name: 'Ghana', code: 'GH' },
            { name: 'Gibraltar', code: 'GI' },
            { name: 'Greece', code: 'GR' },
            { name: 'Greenland', code: 'GL' },
            { name: 'Grenada', code: 'GD' },
            { name: 'Guadeloupe', code: 'GP' },
            { name: 'Guam', code: 'GU' },
            { name: 'Guatemala', code: 'GT' },
            { name: 'Guernsey', code: 'GG' },
            { name: 'Guinea', code: 'GN' },
            { name: 'Guinea-Bissau', code: 'GW' },
            { name: 'Guyana', code: 'GY' },
            { name: 'Haiti', code: 'HT' },
            { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
            { name: 'Holy See (Vatican City State)', code: 'VA' },
            { name: 'Honduras', code: 'HN' },
            { name: 'Hong Kong', code: 'HK' },
            { name: 'Hungary', code: 'HU' },
            { name: 'Iceland', code: 'IS' },
            { name: 'India', code: 'IN' },
            { name: 'Indonesia', code: 'ID' },
            { name: 'Iran, Islamic Republic Of', code: 'IR' },
            { name: 'Iraq', code: 'IQ' },
            { name: 'Ireland', code: 'IE' },
            { name: 'Isle of Man', code: 'IM' },
            { name: 'Israel', code: 'IL' },
            { name: 'Italy', code: 'IT' },
            { name: 'Jamaica', code: 'JM' },
            { name: 'Japan', code: 'JP' },
            { name: 'Jersey', code: 'JE' },
            { name: 'Jordan', code: 'JO' },
            { name: 'Kazakhstan', code: 'KZ' },
            { name: 'Kenya', code: 'KE' },
            { name: 'Kiribati', code: 'KI' },
            { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
            { name: 'Korea, Republic of', code: 'KR' },
            { name: 'Kuwait', code: 'KW' },
            { name: 'Kyrgyzstan', code: 'KG' },
            { name: 'Lao People\'S Democratic Republic', code: 'LA' },
            { name: 'Latvia', code: 'LV' },
            { name: 'Lebanon', code: 'LB' },
            { name: 'Lesotho', code: 'LS' },
            { name: 'Liberia', code: 'LR' },
            { name: 'Libyan Arab Jamahiriya', code: 'LY' },
            { name: 'Liechtenstein', code: 'LI' },
            { name: 'Lithuania', code: 'LT' },
            { name: 'Luxembourg', code: 'LU' },
            { name: 'Macao', code: 'MO' },
            { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
            { name: 'Madagascar', code: 'MG' },
            { name: 'Malawi', code: 'MW' },
            { name: 'Malaysia', code: 'MY' },
            { name: 'Maldives', code: 'MV' },
            { name: 'Mali', code: 'ML' },
            { name: 'Malta', code: 'MT' },
            { name: 'Marshall Islands', code: 'MH' },
            { name: 'Martinique', code: 'MQ' },
            { name: 'Mauritania', code: 'MR' },
            { name: 'Mauritius', code: 'MU' },
            { name: 'Mayotte', code: 'YT' },
            { name: 'Mexico', code: 'MX' },
            { name: 'Micronesia, Federated States of', code: 'FM' },
            { name: 'Moldova, Republic of', code: 'MD' },
            { name: 'Monaco', code: 'MC' },
            { name: 'Mongolia', code: 'MN' },
            { name: 'Montserrat', code: 'MS' },
            { name: 'Morocco', code: 'MA' },
            { name: 'Mozambique', code: 'MZ' },
            { name: 'Myanmar', code: 'MM' },
            { name: 'Namibia', code: 'NA' },
            { name: 'Nauru', code: 'NR' },
            { name: 'Nepal', code: 'NP' },
            { name: 'Netherlands', code: 'NL' },
            { name: 'Netherlands Antilles', code: 'AN' },
            { name: 'New Caledonia', code: 'NC' },
            { name: 'New Zealand', code: 'NZ' },
            { name: 'Nicaragua', code: 'NI' },
            { name: 'Niger', code: 'NE' },
            { name: 'Nigeria', code: 'NG' },
            { name: 'Niue', code: 'NU' },
            { name: 'Norfolk Island', code: 'NF' },
            { name: 'Northern Mariana Islands', code: 'MP' },
            { name: 'Norway', code: 'NO' },
            { name: 'Oman', code: 'OM' },
            { name: 'Pakistan', code: 'PK' },
            { name: 'Palau', code: 'PW' },
            { name: 'Palestinian Territory, Occupied', code: 'PS' },
            { name: 'Panama', code: 'PA' },
            { name: 'Papua New Guinea', code: 'PG' },
            { name: 'Paraguay', code: 'PY' },
            { name: 'Peru', code: 'PE' },
            { name: 'Philippines', code: 'PH' },
            { name: 'Pitcairn', code: 'PN' },
            { name: 'Poland', code: 'PL' },
            { name: 'Portugal', code: 'PT' },
            { name: 'Puerto Rico', code: 'PR' },
            { name: 'Qatar', code: 'QA' },
            { name: 'Reunion', code: 'RE' },
            { name: 'Romania', code: 'RO' },
            { name: 'Russian Federation', code: 'RU' },
            { name: 'RWANDA', code: 'RW' },
            { name: 'Saint Helena', code: 'SH' },
            { name: 'Saint Kitts and Nevis', code: 'KN' },
            { name: 'Saint Lucia', code: 'LC' },
            { name: 'Saint Pierre and Miquelon', code: 'PM' },
            { name: 'Saint Vincent and the Grenadines', code: 'VC' },
            { name: 'Samoa', code: 'WS' },
            { name: 'San Marino', code: 'SM' },
            { name: 'Sao Tome and Principe', code: 'ST' },
            { name: 'Saudi Arabia', code: 'SA' },
            { name: 'Senegal', code: 'SN' },
            { name: 'Serbia and Montenegro', code: 'CS' },
            { name: 'Seychelles', code: 'SC' },
            { name: 'Sierra Leone', code: 'SL' },
            { name: 'Singapore', code: 'SG' },
            { name: 'Slovakia', code: 'SK' },
            { name: 'Slovenia', code: 'SI' },
            { name: 'Solomon Islands', code: 'SB' },
            { name: 'Somalia', code: 'SO' },
            { name: 'South Africa', code: 'ZA' },
            { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
            { name: 'Spain', code: 'ES' },
            { name: 'Sri Lanka', code: 'LK' },
            { name: 'Sudan', code: 'SD' },
            { name: 'Suriname', code: 'SR' },
            { name: 'Svalbard and Jan Mayen', code: 'SJ' },
            { name: 'Swaziland', code: 'SZ' },
            { name: 'Sweden', code: 'SE' },
            { name: 'Switzerland', code: 'CH' },
            { name: 'Syrian Arab Republic', code: 'SY' },
            { name: 'Taiwan, Province of China', code: 'TW' },
            { name: 'Tajikistan', code: 'TJ' },
            { name: 'Tanzania, United Republic of', code: 'TZ' },
            { name: 'Thailand', code: 'TH' },
            { name: 'Timor-Leste', code: 'TL' },
            { name: 'Togo', code: 'TG' },
            { name: 'Tokelau', code: 'TK' },
            { name: 'Tonga', code: 'TO' },
            { name: 'Trinidad and Tobago', code: 'TT' },
            { name: 'Tunisia', code: 'TN' },
            { name: 'Turkey', code: 'TR' },
            { name: 'Turkmenistan', code: 'TM' },
            { name: 'Turks and Caicos Islands', code: 'TC' },
            { name: 'Tuvalu', code: 'TV' },
            { name: 'Uganda', code: 'UG' },
            { name: 'Ukraine', code: 'UA' },
            { name: 'United Arab Emirates', code: 'AE' },
            { name: 'United Kingdom', code: 'GB' },
            { name: 'United States', code: 'US' },
            { name: 'United States Minor Outlying Islands', code: 'UM' },
            { name: 'Uruguay', code: 'UY' },
            { name: 'Uzbekistan', code: 'UZ' },
            { name: 'Vanuatu', code: 'VU' },
            { name: 'Venezuela', code: 'VE' },
            { name: 'Viet Nam', code: 'VN' },
            { name: 'Virgin Islands, British', code: 'VG' },
            { name: 'Virgin Islands, U.S.', code: 'VI' },
            { name: 'Wallis and Futuna', code: 'WF' },
            { name: 'Western Sahara', code: 'EH' },
            { name: 'Yemen', code: 'YE' },
            { name: 'Zambia', code: 'ZM' },
            { name: 'Zimbabwe', code: 'ZW' }
        ];
        return countries;
    }


});
