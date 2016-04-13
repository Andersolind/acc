﻿app.service('CalculateNeighbors', ['OligoCalcUtilsService', function (OligoCalcUtilsService)  {


    // Checks that theString contains only bases
    this.CheckBase= function(theString) {
        var returnString = "";
        var cnt = 0;
        var rcnt = 0;
        var cha = "";
        theString = theString.toUpperCase();
        theString = OligoCalcUtilsService.RemoveNonPrintingChars(theString);
        for (var i = 0; i < theString.length; i++) {
            cha = theString.charAt(i);
            if (this.IsIUpacBase(cha) || this.IsBase(cha)) {
                returnString += cha;
                cnt++;
            } else if (cha != " " && cha != "\n") {
                alert("base # " + (cnt + 1) + " :" + cha + " is not a valid base!");
                return -1;
            }
        }
        return returnString;
    }
    // allowed bases
    this.IsBase= function(theBase) {
        if ((theBase == "A") ||
            (theBase == "G") ||
            (theBase == "C") ||
            (theBase == "U") ||
            (theBase == "T")) {
            return 1;
        }
        return 0;
    }
    // check if base is a IUPAC base
    this.IsIUpacBase= function(theBase) {
        if ((theBase == "M") ||
            (theBase == "R") ||
            (theBase == "W") ||
            (theBase == "S") ||
            (theBase == "Y") ||
            (theBase == "K") ||
            (theBase == "V") ||
            (theBase == "H") ||
            (theBase == "D") ||
            (theBase == "B") ||
            (theBase == "N")) {
            return 1;
        }
        return 0;
    }

    this.CalcIUpair = function(base0, base, i, theSequence, choice) {
        var IUpacBase = "";
        var pair1 = "";
        var pair2 = "";
        var temp1 = new Array(0, 0, 0);
        var temp2 = new Array(0, 0, 0);
        var reValue = new Array(0, 0, 0);
        var base2 = theSequence.charAt(i + 1);
        if (IsIUpacBase(base0))	//if previous base is IUpacBase, do nothing
        { return reValue; }

        if (IsIUpacBase(base)) {
            if (debug) alert("base0 " + base0 + "base" + base + " base2 " + base2);
            if (base == "M") { IUpacBase = "AC"; }
            else if (base == "R") { IUpacBase = "AG"; }
            else if (base == "W") { IUpacBase = "AT"; }
            else if (base == "S") { IUpacBase = "CG"; }
            else if (base == "Y") { IUpacBase = "CT"; }
            else if (base == "K") { IUpacBase = "GT"; }
            else if (base == "V") { IUpacBase = "ACG"; }
            else if (base == "H") { IUpacBase = "ACT"; }
            else if (base == "D") { IUpacBase = "AGT"; }
            else if (base == "B") { IUpacBase = "CGT"; }
            else if (base == "N") { IUpacBase = "ACGT"; }

            var j = 0;
            while (IUpacBase.charAt(j) != "") {
                base = IUpacBase.charAt(j);
                //alert("base choose "+base);
                pair1 = base0 + base;
                //	alert("pair1 "+pair1);
                if (pair1 == "AA") { temp1[0] = 1.2; temp1[1] = 8.0; temp1[2] = 21.9; }
                else if (pair1 == "AT") { temp1[0] = 0.9; temp1[1] = 5.6; temp1[2] = 15.2; }
                else if (pair1 == "TA") { temp1[0] = 0.9; temp1[1] = 6.6; temp1[2] = 18.4; }
                else if (pair1 == "CA") { temp1[0] = 1.7; temp1[1] = 8.2; temp1[2] = 21.0; }
                else if (pair1 == "GT") { temp1[0] = 1.5; temp1[1] = 9.4; temp1[2] = 25.5; }
                else if (pair1 == "CT") { temp1[0] = 1.5; temp1[1] = 6.6; temp1[2] = 16.4; }
                else if (pair1 == "GA") { temp1[0] = 1.5; temp1[1] = 8.8; temp1[2] = 23.5; }
                else if (pair1 == "CG") { temp1[0] = 2.8; temp1[1] = 11.8; temp1[2] = 29.0; }
                else if (pair1 == "GC") { temp1[0] = 2.3; temp1[1] = 10.5; temp1[2] = 26.4; }
                else if (pair1 == "GG") { temp1[0] = 2.1; temp1[1] = 10.9; temp1[2] = 28.4; }

                if (base2 == "") {
                    for (k = 0; k < 2; k++)
                    { temp2[k] = 0.0; }

                } else if (!IsIUpacBase(base2)) {
                    pair2 = base + base2;
                    //alert("pair2 "+pair2);
                    if (pair2 == "AA") { temp2[0] = 1.2; temp2[1] = 8.0; temp2[2] = 21.9; }
                    else if (pair2 == "AT") { temp2[0] = 0.9; temp2[1] = 5.6; temp2[2] = 15.2; }
                    else if (pair2 == "TA") { temp2[0] = 0.9; temp2[1] = 6.6; temp2[2] = 18.4; }
                    else if (pair2 == "CA") { temp2[0] = 1.7; temp2[1] = 8.2; temp2[2] = 21.0; }
                    else if (pair2 == "GT") { temp2[0] = 1.5; temp2[1] = 9.4; temp2[2] = 25.5; }
                    else if (pair2 == "CT") { temp2[0] = 1.5; temp2[1] = 6.6; temp2[2] = 16.4; }
                    else if (pair2 == "GA") { temp2[0] = 1.5; temp2[1] = 8.8; temp2[2] = 23.5; }
                    else if (pair2 == "CG") { temp2[0] = 2.8; temp2[1] = 11.8; temp2[2] = 29.0; }
                    else if (pair2 == "GC") { temp2[0] = 2.3; temp2[1] = 10.5; temp2[2] = 26.4; }
                    else if (pair2 == "GG") { temp2[0] = 2.1; temp2[1] = 10.9; temp2[2] = 28.4; }
                } else if (IsIUpacBase(base2)) {
                    base0 = base; base = base2; i++;
                    temp2 = this.CalcIUpair(base0, base, i, theSequence, choice);
                    i--;
                }

                for (k = 0; k < 3; k++) {
                    if (j == 0) {
                        reValue[k] = temp1[k] + temp2[k];
                    } else {
                        if ((choice == "max") && (reValue[k] < temp1[k] + temp2[k])) {
                            reValue[k] = temp1[k] + temp2[k];
                        } else if ((choice == "min") && (reValue[k] > temp1[k] + temp2[k])) {
                            reValue[k] = temp1[k] + temp2[k];
                        }
                    }
                }
                j++;
            }
        }
        return reValue;
    }

    this.AreThereIUpacBases = function(theSequence) {
        for (var i = 0; i < theSequence.length; i++) {
            if (this.IsIUpacBase(theSequence.charAt(i)))
            { return 1; }
        }
        return 0;
    }

    this.MakeComplement= function(theSequence, isDNA) {
        var returnString = "";
        var i;
        var temp;
        for (i = theSequence.length - 1; i >= 0; i--) {
            temp = theSequence.charAt(i);
            switch (temp) {
                case "A":
                    if (isDNA) {
                        temp = "T";
                    } else {
                        temp = "U";
                    }
                    break;
                case "T":
                    temp = "A";
                    break;
                case "U":
                    temp = "A";
                    break;
                case "G":
                    temp = "C";
                    break;
                case "C":
                    temp = "G";
                    break;
                case "M":
                    temp = "K";
                    break;
                case "K":
                    temp = "M";
                    break;
                case "R":
                    temp = "Y";
                    break;
                case "Y":
                    temp = "R";
                    break;
                case "W":
                    temp = "W";
                    break;
                case "S":
                    temp = "S";
                    break;
                case "V":
                    temp = "B";
                    break;
                case "B":
                    temp = "V";
                    break;
                case "H":
                    temp = "D";
                    break;
                case "D":
                    temp = "H";
                    break;
                default: break;
            }
            returnString = returnString + temp;
        }
        return returnString;
    }

    this.CountChar = function (theChar, theSequence) {
        var returnValue = 0;
        for (var i = 0; i < theSequence.length; i++) {
            if (theSequence.charAt(i) == theChar) {
                returnValue++;
            }
        }
        return returnValue;
    }

    this.CountNeighbors = function(theSeekSeq, theSequence) {
        var returnValue = 0;
        var i = 0;
        while (i >= 0 && i < theSequence.length) {
            i = theSequence.indexOf(theSeekSeq, i);
            if (i >= 0) {
                returnValue++;
                i++;
            }
        }
        return returnValue;
    }

    this.FormatBaseString= function(theString) {
        var returnString = "";
        var cnt = 0;
        var rcnt = 0;
        for (var i = 0; i < theString.length; i++) {
            if (cnt > 2) {
                returnString += " ";
                cnt = 0;
            }
            cnt++;
            returnString += theString.charAt(i);
        }
        return returnString;
    }

    this.micrograms = function(MolWt, Conc) {
        /* MolWt is gms/mol; Conc is micromoles/L; assume volume is 1 milliliter */
        if (MolWt > 0 && Conc > 0) {
            return (Math.round(MolWt * Conc / 100) / 10);
        }
        return "";
    }

}]);