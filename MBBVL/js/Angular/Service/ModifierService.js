/* This file has the object container definitions */
/* Defs  **
function Oligo()  // call new Oligo() to initialize this object
function DoOligoCalc(form, theSequence) // direct interface with FORM
function GetOligoMods(form) // direct interface with FORM
function SetOligoMods(form) // direct interface with FORM
function DoChangeInMWConcAndODOutput(form) // direct interface with FORM
function DoOligoOutput(form, theSequenceObj) // direct interface with FORM
function OligoCalcMWConcAndODs() // split out to make changes in famra, OD, etc easier to calc
function DoChangeInMWConcAndODs(form) // direct interface with FORM
function OligoCalculate()
function OligoCount()
function A260(choice)
function MW(choice)
function GC(choice)
function Tm(choice)
function WAKTm(choice)
function DeltaG(choice)
function DeltaH(choice) 
function DeltaS(choice) 
function NearestNeighborTM( choice)


*** */
app.service('ModifierService', ['CalculateNeighbors', 'OligoCalcUtilsService', function (CalculateNeighbors, OligoCalcUtilsService) {
    this.oligoModifierRow = {

        mCount: 0,
        rCount: 0,
        wCount: 0,
        sCount: 0,
        yCount: 0,
        kCount: 0,
        vCount: 0,
        hCount: 0,
        dCount: 0,
        bCount: 0,
        nCount: 0,

        gcValmin: 0,
        gcValmax: 0,
        mwValmin: 0,
        mwValmax: 0,

        concValmin: 0,
        concValmax: 0,
        microgramValmin: 0,
        microgramValmax: 0,

        deltaHValmin: 0,
        deltaGValmin: 0,
        deltaSValmin: 0,
        deltaHValmax: 0,
        deltaGValmax: 0,
        deltaSValmax: 0,

        RlogK: 0,

        basicTmValmin: 0,
        adjustedTmValmin: 0,
        nearestNeighborTmValmin: 0,
        basicTmValmax: 0,
        adjustedTmValmax: 0,
        nearestNeighborTmValmax: 0,

        eA_A260min: 0,
        eC_A260min: 0,
        eG_A260min: 0,
        eT_A260min: 0,
        eU_A260min: 0,

        eA_A260max: 0,
        eC_A260max: 0,
        eG_A260max: 0,
        eT_A260max: 0,
        eU_A260max: 0,

        //effective counts for MW()
        eA_MWmin: 0,
        eC_MWmin: 0,
        eG_MWmin: 0,
        eT_MWmin: 0,
        eU_MWmin: 0,
        eI_MWmin: 0,

        eA_MWmax: 0,
        eC_MWmax: 0,
        eG_MWmax: 0,
        eT_MWmax: 0,
        eU_MWmax: 0,
        eI_MWmax: 0,
        eGC_min: 0,
        eGC_max: 0,


        aaCount: 0,
        atCount: 0,
        taCount: 0,
        caCount: 0,
        gtCount: 0,
        ctCount: 0,
        gaCount: 0,
        cgCount: 0,
        gcCount: 0,
        ggCount: 0,
        IUpairVals_min: new Array(0, 0, 0),
        IUpairVals_max: new Array(0, 0, 0),
        hasIUpacBase: 0,
        isDeoxy: 1,
        isSingleStranded: 1,

        // arrays
        seqArray: [],
        revSeqArray: [],
        Tm: this.Tm,
        WAKTm: this.WAKTm,
        GC: this.GC,
        MW: this.MW,
        A260: this.A260,
        DeltaH: this.DeltaH,
        DeltaG: this.DeltaG,
        DeltaS: this.DeltaS,
        NearestNeighborTM: '',
        OligoCount: '',
        OligoCalculate: '',
        OligoCalcMWConcAndODs: '',
        DoChangeInMWConcAndODs: '', //public interface
        DoChangeInMWConcAndODOutput: '', //public interface
        DoOligoCalc: '', //public interface
        GetOligoMods: '', //public interface
        SetOligoMods: '', //public interface
        DoOligoOutput: '', //public interface
        // publically set values
        Sequence: "",
        revSequence: "",
        ODs: 1,
        FivePrimeModification: "",
        FivePrimeMW: 0,
        ThreePrimeModification: "",
        ThreePrimeMW: 0,
        famCount: 0,
        tetCount: 0,
        hexCount: 0,
        tamraCount: 0,
        saltConcentration: 50,
        primerConcentration: 50


    }

    // direct interface with FORM

    this.GetOligoMods = function (form) {
        this.FivePrimeModification = form.FivePrime.options[form.FivePrime.selectedIndex].text;
        this.FivePrimeMW = parseInt(form.FivePrime.options[form.FivePrime.selectedIndex].value);
        this.ThreePrimeModification = form.ThreePrime.options[form.ThreePrime.selectedIndex].text;
        this.ThreePrimeMW = parseInt(form.ThreePrime.options[form.ThreePrime.selectedIndex].value);
        /*
            this.famCount   = form.fam.value;
            this.hexCount   = form.hex.value;
            this.tetCount   = form.tet.value;
            this.tamraCount = form.tamra.value;
        */
    }

    // direct interface with FORM

    this.SetOligoMods = function (form) {
        form.FivePrime.options.selectedIndex = 0;
        for (var i = 0; i < form.FivePrime.options.length; i++) {
            if (this.FivePrimeModification.length > 0) {
                if (form.FivePrime.options[i].text.indexOf(this.FivePrimeModification) >= 0) {
                    form.FivePrime.options[i].selected = true;
                    form.FivePrime.options.selectedIndex = i;
                } else {
                    form.FivePrime.options[i].selected = false;
                }
            }
        }
        form.ThreePrime.options.selectedIndex = 0;
        for (var i = 0; i < form.ThreePrime.options.length; i++) {
            if (this.ThreePrimeModification.length > 0) {
                if (form.ThreePrime.options[i].text.indexOf(this.ThreePrimeModification) >= 0) {
                    form.ThreePrime.options[i].selected = true;
                    form.ThreePrime.options.selectedIndex = i;
                } else {
                    form.ThreePrime.options[i].selected = false;
                }
            }
        }
    }

    // direct interface with FORM

    this.DoOligoCalc = function (form, theSequence) {
        this.oligoModifierRow.Sequence = theSequence;
        temp = CalculateNeighbors.CheckBase(theSequence); // external call
        if (temp == -1) { return; } // do not continue if the sequence is not valid!
        this.Sequence = temp;
        this.ODs = this.oligoModifierRow.ODs;
        this.saltConcentration = parseFloat(this.oligoModifierRow.saltConcentration); // parseInt(form.saltConcBox.value);
        this.primerConcentration = parseFloat(this.oligoModifierRow.primerConcentration);  // parseInt(form.primerConcBox.value);
        this.oligoModifierRow.hasIUpacBase = CalculateNeighbors.AreThereIUpacBases(this.oligoModifierRow.Sequence);
        this.oligoModifierRow.isDeoxy = 1;
        this.isSingleStranded = 1;
       // if (debug) alert("Sequence length=" + this.Sequence.length + "; Sequence=" + this.oligoModifierRow.Sequence);
        //temp = form.deoxy.options[form.deoxy.selectedIndex].value;
        //if (temp.indexOf("DNA") >= 0) {
        //    this.isDeoxy = 1;
        //} else {
        //    this.isDeoxy = 0;
        //}
        //if (temp.indexOf("ds") >= 0) {
        //    this.isSingleStranded = 0;
        //} else {
        //    this.isSingleStranded = 1;
        //}
        var value = this.OligoCalculate();
        return value;
    }

    // direct interface with FORM
    this.DoChangeInMWConcAndODOutput = function (form) {
      //  if (debug) alert('MW=' + this.mwValmin);
        form.ODreadOnly.value = this.ODs;
        if (!this.oligoModifierRow.hasIUpacBase) {
            if (this.isSingleStranded) {
                form.mwBox.value = this.mwValmin;
            } else {
                form.mwBox.value = theOligo.mwValmin + theComplement.mwValmin;
            }

            form.micromolarConc.value = this.concValmin;
            form.micrograms.value = this.microgramValmin;
        } else {
            if (this.isSingleStranded) {
                form.mwBox.value = this.mwValmin + " to " + this.mwValmax;
            } else {
                var tempMIn = theOligo.mwValmin + theComplement.mwValmin;
                var tempMax = theOligo.mwValmax + theComplement.mwValmax;
                form.mwBox.value = tempMIn + " to " + tempMax;
            }

            form.micromolarConc.value = this.concValmin + " to " + this.concValmax;
            form.micrograms.value = this.microgramValmin + " to " + this.microgramValmax;
        }
    }

    // direct interface with FORM
    this.DoOligoOutput = function (form, theSequenceObj) {
        this.DoChangeInMWConcAndODOutput(form);
        if (!this.oligoModifierRow.hasIUpacBase) {
            form.gcBox.value = this.oligoModifierRow.gcValmin;
            form.tmBox.value = this.oligoModifierRow.basicTmValmin;
            form.WAKtmBox.value = this.oligoModifierRow.adjustedTmValmin;
            form.nTmBox.value = this.oligoModifierRow.nearestNeighborTmValmin;
        } else {
            form.gcBox.value = this.oligoModifierRow.gcValmin + " to " + this.oligoModifierRow.gcValmax;
            form.tmBox.value = this.oligoModifierRow.basicTmValmin + " to " + this.oligoModifierRow.basicTmValmax;
            form.WAKtmBox.value = this.oligoModifierRow.adjustedTmValmin + " to " + this.oligoModifierRow.adjustedTmValmax;
            form.nTmBox.value = this.oligoModifierRow.nearestNeighborTmValmin + " to " + this.oligoModifierRow.nearestNeighborTmValmax;
        }
        form.RlogKBox.value = this.oligoModifierRow.RlogK;
        if (!this.oligoModifierRow.hasIUpacBase) {
            form.deltaHBox.value = this.oligoModifierRow.deltaHValmin;
            form.deltaGBox.value = this.oligoModifierRow.deltaGValmin;
            form.deltaSBox.value = this.oligoModifierRow.deltaSValmin;
        } else {
            form.deltaHBox.value = this.deltaHValmin + " to " + this.deltaHValmax;
            form.deltaGBox.value = this.deltaGValmin + " to " + this.deltaGValmax;
            form.deltaSBox.value = this.deltaSValmin + " to " + this.deltaSValmax;
        }
        form.lBox.value = this.oligoModifierRow.Sequence.length;
        theSequenceObj.value = FormatBaseString(this.oligoModifierRow.Sequence);
    }

    // split out to make changes in famra, OD, etc easier to calc
    this.OligoCalcMWConcAndODs = function () {
        /*** Now do MW calculation ***/
        if (!this.oligoModifierRow.hasIUpacBase) {
            this.oligoModifierRow.mwValmin = this.MW("min");
            this.oligoModifierRow.mwValmax = this.oligoModifierRow.mwValmin;
        } else {
            this.mwValmin = this.MW("min");
            this.mwValmax = this.MW("max");
        }
        //if (debug) alert("oligoCalc mw val=" + this.mwValmin);
        /*** Now do A260 concentration calculation ***/
        this.oligoModifierRow.concValmin = this.A260("min");
        this.oligoModifierRow.concValmax = this.A260("max");
        this.oligoModifierRow.microgramValmin = OligoCalcUtilsService.micrograms(this.oligoModifierRow.mwValmin, this.oligoModifierRow.concValmin); // external call
        this.oligoModifierRow.microgramValmax = OligoCalcUtilsService.micrograms(this.oligoModifierRow.mwValmax, this.oligoModifierRow.concValmax);
    }

    // direct interface with FORM
    function DoChangeInMWConcAndODs(form) {
        this.FivePrimeModification = form.FivePrime.options[form.FivePrime.selectedIndex].text;
        this.FivePrimeMW = parseInt(form.FivePrime.options[form.FivePrime.selectedIndex].value);
        this.ThreePrimeModification = form.ThreePrime.options[form.ThreePrime.selectedIndex].text;
        this.ThreePrimeMW = parseInt(form.ThreePrime.options[form.ThreePrime.selectedIndex].value);
        /*
            this.famCount   = form.fam.value;
            this.hexCount   = form.hex.value;
            this.tetCount   = form.tet.value;
            this.tamraCount = form.tamra.value;
        */
        this.ODs = form.ODs.value;
        temp = form.deoxy.options[form.deoxy.selectedIndex].value;
        if (temp.indexOf("DNA") >= 0) {
            this.oligoModifierRow.isDeoxy = 1;
        } else {
            this.oligoModifierRow.isDeoxy = 0;
        }
        if (temp.indexOf("ds") >= 0) {
            this.oligoModifierRow.isSingleStranded = 0;
        } else {
            this.oligoModifierRow.isSingleStranded = 1;
        }
        this.OligoCalculate();
    }


    this.OligoCalculate = function() {
        this.OligoCount();
        /*** Do GC calculation ***/
        if (!this.oligoModifierRow.hasIUpacBase) {
            this.oligoModifierRow.gcValmin = this.GC("min");
            this.oligoModifierRow.gcValmax = this.oligoModifierRow.gcValmin;
        } else {
            this.oligoModifierRow.gcValmin = this.GC("min");
            this.oligoModifierRow.gcValmax = this.GC("max");
        }
        this.OligoCalcMWConcAndODs()

        /** Calculate numbers for Thermodynamic TM calculation **/
        if (!this.oligoModifierRow.hasIUpacBase) {
            this.oligoModifierRow.deltaHValmin = this.DeltaH("min");
            this.oligoModifierRow.deltaGValmin = this.DeltaG("min");
            this.oligoModifierRow.deltaSValmin = this.DeltaS("min");
            this.oligoModifierRow.deltaHValmax = this.oligoModifierRow.deltaHValmin;
            this.oligoModifierRow.deltaGValmax = this.oligoModifierRow.deltaGValmin;
            this.oligoModifierRow.deltaSValmax = this.oligoModifierRow.deltaSValmin;
        } else {
            this.oligoModifierRow.deltaHValmin = this.DeltaH("min");
            this.oligoModifierRow.deltaGValmin = this.DeltaG("min");
            this.oligoModifierRow.deltaSValmin = this.DeltaS("min");
            this.oligoModifierRow.deltaHValmax = this.DeltaH("max");
            this.oligoModifierRow.deltaGValmax = this.DeltaG("max");
            this.oligoModifierRow.deltaSValmax = this.DeltaS("max");
        }
        if (!this.oligoModifierRow.hasIUpacBase) {
            var finalValues = { gc: this.oligoModifierRow.gcValmin = this.GC("min"), neighbors: this.oligoModifierRow.nearestNeighborTmValmin = this.NearestNeighborTM("min") };
            return finalValues;
            //this.oligoModifierRow.basicTmValmin = this.Tm("min");
            //this.oligoModifierRow.adjustedTmValmin = this.WAKTm("min");
       //  return   this.oligoModifierRow.nearestNeighborTmValmin = this.NearestNeighborTM("min");
            //this.oligoModifierRow.basicTmValmax = this.oligoModifierRow.basicTmValmin;
            //this.oligoModifierRow.adjustedTmValmax = this.oligoModifierRow.adjustedTmValmin;
            //this.oligoModifierRow.nearestNeighborTmValmax = this.oligoModifierRow.adjustedTmValmin;
        } else {
            var finalValues = { gc: this.oligoModifierRow.gcValmin = this.GC("min"), neighbors: this.oligoModifierRow.nearestNeighborTmValmin = this.NearestNeighborTM("min") };
            return finalValues;
            //this.oligoModifierRow.basicTmValmin = this.Tm("min");
            //this.oligoModifierRow.adjustedTmValmin = this.WAKTm("min");
      //    return  this.oligoModifierRow.nearestNeighborTmValmin = this.NearestNeighborTM("min");
            //this.oligoModifierRow.basicTmValmax = this.Tm("max");
            //this.oligoModifierRow.adjustedTmValmax = this.WAKTm("max");
            //this.oligoModifierRow.nearestNeighborTmValmax = this.NearestNeighborTM("max");
        }
    }

     this.OligoCount= function() {
         this.oligoModifierRow.aCount = this.CountChar("A", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.cCount = this.CountChar("C", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.gCount = this.CountChar("G", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.tCount = this.CountChar("T", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.uCount = this.CountChar("U", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.iCount = this.CountChar("I", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.mCount = this.CountChar("M", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.rCount = this.CountChar("R", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.wCount = this.CountChar("W", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.sCount = this.CountChar("S", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.yCount = this.CountChar("Y", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.kCount = this.CountChar("K", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.vCount = this.CountChar("V", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.hCount = this.CountChar("H", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.dCount = this.CountChar("D", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.bCount = this.CountChar("B", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.nCount = this.CountChar("N", this.oligoModifierRow.Sequence);
        //Effective a,c,g,t count for different calculations
        //effective counts for A260min()
         this.oligoModifierRow.eA_A260min = this.oligoModifierRow.aCount;
         this.oligoModifierRow.eU_A260min = this.oligoModifierRow.uCount;
         this.oligoModifierRow.eI_A260min = this.oligoModifierRow.iCount;
         this.oligoModifierRow.eC_A260min = this.oligoModifierRow.cCount + this.oligoModifierRow.mCount + this.oligoModifierRow.sCount + this.oligoModifierRow.yCount + this.oligoModifierRow.vCount
                            + this.oligoModifierRow.hCount + this.oligoModifierRow.bCount + this.oligoModifierRow.nCount;
         this.oligoModifierRow.eG_A260min = this.oligoModifierRow.gCount + this.oligoModifierRow.rCount;
         this.oligoModifierRow.eT_A260min = this.oligoModifierRow.tCount + this.oligoModifierRow.wCount + this.oligoModifierRow.kCount + this.oligoModifierRow.dCount;

         this.oligoModifierRow.eA_A260max = this.oligoModifierRow.aCount + this.oligoModifierRow.mCount + this.oligoModifierRow.rCount + this.oligoModifierRow.wCount + this.oligoModifierRow.vCount
                        + this.oligoModifierRow.hCount + this.oligoModifierRow.bCount + this.oligoModifierRow.nCount;
         this.oligoModifierRow.eC_A260max = this.oligoModifierRow.cCount;
         this.oligoModifierRow.eG_A260max = this.oligoModifierRow.gCount + this.oligoModifierRow.sCount + this.oligoModifierRow.kCount + this.oligoModifierRow.dCount;
         this.oligoModifierRow.eT_A260max = this.oligoModifierRow.tCount + this.oligoModifierRow.yCount;

        //effective counts for MW()
         this.oligoModifierRow.eA_MWmin = this.oligoModifierRow.aCount + this.oligoModifierRow.rCount;
         this.oligoModifierRow.eC_MWmin = this.oligoModifierRow.eC_A260min;
         this.oligoModifierRow.eU_MWmin = this.oligoModifierRow.eU_A260min;
         this.oligoModifierRow.eI_MWmin = this.oligoModifierRow.eI_A260min;
         this.oligoModifierRow.eG_MWmin = this.oligoModifierRow.gCount;
         this.oligoModifierRow.eT_MWmin = this.oligoModifierRow.eT_A260min;

         this.oligoModifierRow.eA_MWmax = this.oligoModifierRow.aCount + this.oligoModifierRow.mCount + this.oligoModifierRow.wCount + this.oligoModifierRow.hCount;
         this.oligoModifierRow.eC_MWmax = this.oligoModifierRow.cCount;
         //Start here anders
         this.oligoModifierRow.eG_MWmax = this.oligoModifierRow.gCount + this.oligoModifierRow.rCount + this.oligoModifierRow.sCount + this.oligoModifierRow.kCount + this.oligoModifierRow.vCount +
                         this.oligoModifierRow.dCount + this.oligoModifierRow.bCount + this.oligoModifierRow.nCount;
         this.oligoModifierRow.eT_MWmax = this.oligoModifierRow.tCount + this.oligoModifierRow.yCount;

         this.oligoModifierRow.eGC_min = this.oligoModifierRow.gCount + this.oligoModifierRow.cCount + this.oligoModifierRow.sCount;
         this.oligoModifierRow.eGC_max = (this.oligoModifierRow.Sequence.length) - this.oligoModifierRow.aCount - this.oligoModifierRow.tCount - this.oligoModifierRow.wCount - this.oligoModifierRow.uCount;

        // count Nearest Neighbors
         this.oligoModifierRow.aaCount = OligoCalcUtilsService.CountNeighbors("AA", this.oligoModifierRow.Sequence) + OligoCalcUtilsService.CountNeighbors("TT", this.oligoModifierRow.Sequence) + OligoCalcUtilsService.CountNeighbors("UU", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.atCount = OligoCalcUtilsService.CountNeighbors("AT", this.oligoModifierRow.Sequence) + OligoCalcUtilsService.CountNeighbors("AU", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.taCount = OligoCalcUtilsService.CountNeighbors("TA", this.oligoModifierRow.Sequence) + OligoCalcUtilsService.CountNeighbors("UA", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.caCount = OligoCalcUtilsService.CountNeighbors("CA", this.oligoModifierRow.Sequence) + OligoCalcUtilsService.CountNeighbors("TG", this.oligoModifierRow.Sequence) + OligoCalcUtilsService.CountNeighbors("UG", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.gtCount = OligoCalcUtilsService.CountNeighbors("GT", this.oligoModifierRow.Sequence) + OligoCalcUtilsService.CountNeighbors("AC", this.oligoModifierRow.Sequence) + OligoCalcUtilsService.CountNeighbors("GU", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.ctCount = OligoCalcUtilsService.CountNeighbors("CT", this.oligoModifierRow.Sequence) + OligoCalcUtilsService.CountNeighbors("AG", this.oligoModifierRow.Sequence) + OligoCalcUtilsService.CountNeighbors("CU", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.gaCount = OligoCalcUtilsService.CountNeighbors("GA", this.oligoModifierRow.Sequence) + OligoCalcUtilsService.CountNeighbors("TC", this.oligoModifierRow.Sequence) + OligoCalcUtilsService.CountNeighbors("UC", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.cgCount = OligoCalcUtilsService.CountNeighbors("CG", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.gcCount = OligoCalcUtilsService.CountNeighbors("GC", this.oligoModifierRow.Sequence);
         this.oligoModifierRow.ggCount = OligoCalcUtilsService.CountNeighbors("GG", this.oligoModifierRow.Sequence) + OligoCalcUtilsService.CountNeighbors("CC", this.oligoModifierRow.Sequence);
        //Calculate IUpac pairs
        /*----08/02/99 fix one bug for nearest Neighbor Calc, */
        for (var j = 0; j < 3; j++) {
            this.oligoModifierRow.IUpairVals_min[j] = 0;
            this.oligoModifierRow.IUpairVals_max[j] = 0;
        }
        /*******************************************************/
        for (var i = 1; i < this.oligoModifierRow.Sequence.length; i++) {	//first base can not be IUpacbase
            var base0 = this.oligoModifierRow.Sequence.charAt((i - 1));
            var base = this.oligoModifierRow.Sequence.charAt(i);
            var temp = new Array(0, 0, 0);

            temp = OligoCalcUtilsService.CalcIUpair(base0, base, i, this.oligoModifierRow.Sequence, "min");
          //  if (debug) alert("temp " + temp[0] + " " + temp[1] + " " + temp[2]);
            for (var j = 0; j < 3; j++) {
                this.oligoModifierRow.IUpairVals_min[j] += temp[j];
            }
          //  if (debug) alert("mim" + this.oligoModifierRow.IUpairVals_min[0] + " " + this.oligoModifierRow.IUpairVals_min[1] + " " + this.oligoModifierRow.IUpairVals_min[2]);
            temp = OligoCalcUtilsService.CalcIUpair(base0, base, i, this.oligoModifierRow.Sequence, "max");
          //  if (debug) alert("temp " + temp[0] + " " + temp[1] + " " + temp[2]);
            for (j = 0; j < 3; j++) {
                this.oligoModifierRow.IUpairVals_max[j] += temp[j];
            }
          //  if (debug) alert("max" + this.oligoModifierRow.IUpairVals_max[0] + " " + this.oligoModifierRow.IUpairVals_max[1] + " " + this.oligoModifierRow.IUpairVals_max[2]);
        }
    }

    /* Molar Absorptivity
    Values from ABI, units M-1 cm-1
    A	15200	G	12010	C	7050	T	8400	6' FAM	20960	TET	16255
    HEX	31580	TAMRA	31980
    Need ribonucleotide molar absorptivities
    U 20800
    Assume 1 OD of a standard 1ml solution (1 cm pathlength)
    -----  */
    this.A260 = function(choice) {
        var div;
        if (this.oligoModifierRow.Sequence.length > 0) {
            if (this.oligoModifierRow.isSingleStranded) {
                if (this.oligoModifierRow.isDeoxy) {
                    if (choice == "min") {	//calculates the minimum value, use the e_A260max since it is the divident
                        div = (this.oligoModifierRow.eA_A260max * 15200 +
                            this.oligoModifierRow.eG_A260max * 12010 +
                            this.oligoModifierRow.eC_A260max * 7050 +
                            this.oligoModifierRow.eT_A260max * 8400 +
                            this.oligoModifierRow.eU_A260max * 9800 +
                            this.oligoModifierRow.famCount * 20960 +
                            this.oligoModifierRow.tetCount * 16255 +
                            this.oligoModifierRow.hexCount * 31580 +
                            this.oligoModifierRow.tamraCount * 31980);
                    } else { //choice=="max"
                        div = (this.oligoModifierRow.eA_A260min * 15200 +
                            this.oligoModifierRow.eG_A260min * 12010 +
                            this.oligoModifierRow.eC_A260min * 7050 +
                            this.oligoModifierRow.eT_A260min * 8400 +
                            this.oligoModifierRow.eU_A260min * 9800 +
                            this.oligoModifierRow.famCount * 20960 +
                            this.oligoModifierRow.tetCount * 16255 +
                            this.oligoModifierRow.hexCount * 31580 +
                            this.oligoModifierRow.tamraCount * 31980);
                    }
                } else {
                    if (choice == "min") {	//calculates the minimum value, use the e_A260max since it is the divident
                        div = (this.oligoModifierRow.eA_A260max * 15400 +
                            this.oligoModifierRow.eG_A260max * 13700 +
                            this.oligoModifierRow.eC_A260max * 9000 +
                            this.oligoModifierRow.eT_A260max * 9400 +
                            this.oligoModifierRow.eU_A260max * 10000 +
                            this.oligoModifierRow.famCount * 20960 +
                            this.oligoModifierRow.tetCount * 16255 +
                            this.oligoModifierRow.hexCount * 31580 +
                            this.oligoModifierRow.tamraCount * 31980);
                    } else { //choice=="max"
                        div = (this.oligoModifierRow.eA_A260min * 15400 +
                            this.oligoModifierRow.eG_A260min * 13700 +
                            this.oligoModifierRow.eC_A260min * 9000 +
                            this.oligoModifierRow.eT_A260min * 9400 +
                            this.oligoModifierRow.eU_A260min * 10000 +
                            this.oligoModifierRow.famCount * 20960 +
                            this.oligoModifierRow.tetCount * 16255 +
                            this.oligoModifierRow.hexCount * 31580 +
                            this.oligoModifierRow.tamraCount * 31980);
                    }
                }
            } else {
                if (this.oligoModifierRow.isDeoxy) {
                    div = this.oligoModifierRow.Sequence.length * 2 * 6400;
                } else {
                    div = this.oligoModifierRow.Sequence.length * 2 * 8000;
                }
            }
            // units are in microMoles/liter
            return (Math.round(this.oligoModifierRow.ODs * 1000000000 / div) / 1000);

        }
        return "";
    }

    this.GetMod_A260= function() {
        return 0;
    }

    this.MW = function(choice) {
        var mw;
        if (this.oligoModifierRow.Sequence.length > 0) {
            if (this.oligoModifierRow.isDeoxy) {
                if (choice == "min") {
                    mw = 313.21 * this.oligoModifierRow.eA_MWmin +
                            329.21 * this.oligoModifierRow.eG_MWmin +
                            289.18 * this.oligoModifierRow.eC_MWmin +
                            304.2 * this.oligoModifierRow.eT_MWmin +
                            290.169 * this.oligoModifierRow.eU_MWmin +
                            314. * this.oligoModifierRow.eI_MWmin
                            - 61.96;
                } else {
                    mw = 313.21 * this.oligoModifierRow.eA_MWmax +
                            329.21 * this.oligoModifierRow.eG_MWmax +
                            289.18 * this.oligoModifierRow.eC_MWmax +
                            304.2 * this.oligoModifierRow.eT_MWmax +
                            290.169 * this.oligoModifierRow.eU_MWmax +
                            314. * this.oligoModifierRow.eI_MWmax
                            - 61.96;
                }
            } else { // is riboNucleotide
                if (choice == "min") {
                    mw = 329.21 * this.oligoModifierRow.eA_MWmin +
                            345.21 * this.oligoModifierRow.eG_MWmin +
                            305.18 * this.oligoModifierRow.eC_MWmin +
                            320.2 * this.oligoModifierRow.eT_MWmin +
                            306.169 * this.oligoModifierRow.eU_MWmin +
                            330 * this.oligoModifierRow.eI_MWmin
                            + 159;

                } else {
                    mw = 329.21 * this.oligoModifierRow.eA_MWmax +
                            345.21 * this.oligoModifierRow.eG_MWmax +
                            305.18 * this.oligoModifierRow.eC_MWmax +
                            320.2 * this.oligoModifierRow.eT_MWmax +
                            306.169 * this.oligoModifierRow.eU_MWmax +
                            330 * this.oligoModifierRow.eI_MWmax
                            + 159;
                }
            }
            var new_mw = mw + this.oligoModifierRow.FivePrimeMW;
            new_mw += this.oligoModifierRow.ThreePrimeMW;
            new_mw = Math.round(10 * new_mw) / 10;
            return new_mw;
        }
        return "";
    }

    this.GC = function(choice) {
        if (this.oligoModifierRow.Sequence.length > 0) {
            if (choice == "min") {
                return Math.round(100 * this.oligoModifierRow.eGC_min / this.oligoModifierRow.Sequence.length)
            } else {
                return Math.round(100 * this.oligoModifierRow.eGC_max / this.oligoModifierRow.Sequence.length);
            }
        }
        return "";
    }

    this.Tm = function(choice) {
        if (this.oligoModifierRow.Sequence.length > 0) {
            if (this.oligoModifierRow.Sequence.length < 14) {
                if (choice == "min") {
                    return Math.round(2 * (this.oligoModifierRow.Sequence.length - this.eGC_min) + 4 * (this.eGC_min));
                } else {
                    return Math.round(2 * (this.oligoModifierRow.Sequence.length - this.eGC_max) + 4 * (this.eGC_max));
                }
            }
            else {
                if (choice == "min") {
                    return Math.round(64.9 + 41 * ((this.eGC_min - 16.4) / this.oligoModifierRow.Sequence.length));
                } else {
                    return Math.round(64.9 + 41 * ((this.eGC_max - 16.4) / this.oligoModifierRow.Sequence.length));
                }
            }
        }
        return "";
    }

    this.WAKTm = function(choice) {
        if (this.oligoModifierRow.Sequence.length > 0) {
            if (this.oligoModifierRow.isDeoxy) {
                if (this.oligoModifierRow.Sequence.length < 14) {
                    if (choice == "min") {
                        return Math.round(2 * (this.oligoModifierRow.Sequence.length - this.eGC_min) + 4 * (this.eGC_min) +
                            21.6 + (7.21 * Math.log(this.saltConcentration / 1000)));
                    } else {
                        return Math.round(2 * (this.oligoModifierRow.Sequence.length - this.eGC_max) + 4 * (this.eGC_max) +
                            21.6 + (7.21 * Math.log(this.saltConcentration / 1000)));
                    }
                }
                else {
                    if (choice == "min") {
                        return Math.round(100.5 + (0.41 * this.gcValmin) - (820 / this.oligoModifierRow.Sequence.length) +
                            (7.21 * Math.log(this.saltConcentration / 1000)));
                    } else {
                        return Math.round(100.5 + (0.41 * this.gcValmax) - (820 / this.oligoModifierRow.Sequence.length) +
                            (7.21 * Math.log(this.saltConcentration / 1000)));
                    }
                }
            } else {
                if (this.oligoModifierRow.Sequence.length > 20) {
                    if (choice == "min") {
                        return Math.round(79.8 + (0.584 * this.gcValmin) + (11.8 * (this.gcValmin / 100) * (this.gcValmin / 100)) - (820 / this.oligoModifierRow.Sequence.length) +
                            (8.03 * Math.log(this.saltConcentration / 1000)));
                    } else {
                        return Math.round(79.8 + (0.584 * this.gcValmax) - (820 / this.oligoModifierRow.Sequence.length) +
                            (8.03 * Math.log(this.saltConcentration / 1000)));
                    }
                } else {
                    return "too short";
                }
            }
        }
        return "";
    }

    /* ******
        deltaH=deltaG + TdeltaS
        delta G =  RT ln ([DNA-primer complex]/([DNA][primer]))
        T = deltaH/(deltaS + R ln([DNA-primer complex]/([DNA][primer])))  + 7.21* ln [Na concentration])
    
        Assume [DNA-primer complex] = [DNA]
    
        NOTE: Javascript Math.log() calls a NATURAL LOG, not Log base 10!
    */

    this.DeltaG = function(choice) {
        if (this.oligoModifierRow.Sequence.length > 7) {
            var val = -5.0;
            // Helix initiation Free Energy of 5 kcal.
            // symmetry function: if symmetrical, subtract another 0.4
            val += 1.2 * this.oligoModifierRow.aaCount;
            val += 0.9 * this.oligoModifierRow.atCount;
            val += 0.9 * this.oligoModifierRow.taCount;
            val += 1.7 * this.oligoModifierRow.caCount;
            val += 1.5 * this.oligoModifierRow.gtCount;
            val += 1.5 * this.oligoModifierRow.ctCount;
            val += 1.5 * this.oligoModifierRow.gaCount;
            val += 2.8 * this.oligoModifierRow.cgCount;
            val += 2.3 * this.oligoModifierRow.gcCount;
            val += 2.1 * this.oligoModifierRow.ggCount;
            if (choice == "min") {
                val += this.oligoModifierRow.IUpairVals_min[0];
            } else {
                val += this.oligoModifierRow.IUpairVals_max[0];
            }
            return Math.round((1000 * val)) / 1000;
        }
        return "";
    }

    this.DeltaH = function(choice) {
        if (this.Sequence.length > 7) {
            var val = 0.0;
            if (this.oligoModifierRow.isDeoxy) {
                val += 8.0 * this.oligoModifierRow.aaCount;
                val += 5.6 * this.oligoModifierRow.atCount;
                val += 6.6 * this.oligoModifierRow.taCount;
                val += 8.2 * this.oligoModifierRow.caCount;
                val += 9.4 * this.oligoModifierRow.gtCount;
                val += 6.6 * this.oligoModifierRow.ctCount;
                val += 8.8 * this.oligoModifierRow.gaCount;
                val += 11.8 * this.oligoModifierRow.cgCount;
                val += 10.5 * this.oligoModifierRow.gcCount;
                val += 10.9 * this.oligoModifierRow.ggCount;
            } else {
                val += 6.8 * this.oligoModifierRow.aaCount;
                val += 9.38 * this.oligoModifierRow.atCount;
                val += 7.69 * this.oligoModifierRow.taCount;
                val += 10.44 * this.oligoModifierRow.caCount;
                val += 11.4 * this.oligoModifierRow.gtCount;
                val += 10.48 * this.oligoModifierRow.ctCount;
                val += 12.44 * this.oligoModifierRow.gaCount;
                val += 10.64 * this.oligoModifierRow.cgCount;
                val += 14.88 * this.oligoModifierRow.gcCount;
                val += 13.39 * this.oligoModifierRow.ggCount;
            }
            if (choice == "min") {
                val += this.oligoModifierRow.IUpairVals_min[1];
            } else {
                val += this.oligoModifierRow.IUpairVals_max[1];
            }
            return Math.round((1000 * val)) / 1000;
        }
        return "";
    }

    /*
    RNA nearest neighbor information 
    
    Xia T., SantaLucia J., Burkard M.E., Kierzek R., Schroeder S.J., Jiao X.,
    Cox C., Turner D.H. (1998). Thermodynamics parameters for an expanded
    nearest-neighbor model for formation of RNA duplexes with Watson-Crick
    base pairs. Biochemistry 37: 14719-14735
    
        DeltaH   DeltaS
        J.mol-1  J.mol-1.K-1
    
    AA  -6820.0  -19.0
    AC -10200.0  -26.2
    AG  -7600.0  -19.2
    AU  -9380.0  -26.7
    CA -10440.0  -26.9
    CC -12200.0  -29.7
    CG -10640.0  -26.7
    CU -10480.0  -27.1
    GA -12440.0  -32.5
    GC -14880.0  -36.9
    GG -13390.0  -32.7
    GU -11400.0  -29.5
    UA  -7690.0  -20.5
    UC -13300.0  -35.5
    UG -10500.0  -27.8
    UU  -6600.0  -18.4
    IA   3720.0  -10.5
    IG   3610.0    1.5
    */


    this.DeltaS=function(choice) {
        if (this.Sequence.length > 7) {
            var val = 0;
            if (this.oligoModifierRow.isDeoxy) {
                val += 21.9 * this.oligoModifierRow.aaCount;
                val += 15.2 * this.oligoModifierRow.atCount;
                val += 18.4 * this.oligoModifierRow.taCount;
                val += 21.0 * this.oligoModifierRow.caCount;
                val += 25.5 * this.oligoModifierRow.gtCount;
                val += 16.4 * this.oligoModifierRow.ctCount;
                val += 23.5 * this.oligoModifierRow.gaCount;
                val += 29.0 * this.oligoModifierRow.cgCount;
                val += 26.4 * this.oligoModifierRow.gcCount;
                val += 28.4 * this.oligoModifierRow.ggCount;
            } else {
                val += 19.0 * this.oligoModifierRow.aaCount;
                val += 26.7 * this.oligoModifierRow.atCount;
                val += 20.5 * this.oligoModifierRow.taCount;
                val += 26.9 * this.oligoModifierRow.caCount;
                val += 29.5 * this.oligoModifierRow.gtCount;
                val += 27.1 * this.oligoModifierRow.ctCount;
                val += 32.5 * this.oligoModifierRow.gaCount;
                val += 26.7 * this.oligoModifierRow.cgCount;
                val += 36.9 * this.oligoModifierRow.gcCount;
                val += 32.7 * this.oligoModifierRow.ggCount;
            }
            if (choice == "min") {
                val += this.oligoModifierRow.IUpairVals_min[2];
            } else {
                val += this.oligoModifierRow.IUpairVals_max[2];
            }
            return Math.round((1000 * val)) / 1000;
        }
        return "";
    }

    this.NearestNeighborTM= function(choice) {
        var theReturn = "";
        if (this.Sequence.length > 7) {
            //
            var K = 1 / (this.primerConcentration * 1E-9);  // Convert from nanomoles to moles
            var R = 1.987;  //cal/(mole*K);
            var RlnK = R * Math.log(K); // javascript log is the natural log (ln)
            this.RlogK = Math.round(1000 * RlnK) / 1000;
            // Helix initiation Free Energy of 3.4 kcal (Sugimoto et al, 1996)
            // symmetry function: if symmetrical, subtract another 0.4 - not implemented
            if (choice == "min") {
                theReturn = 1000 * ((this.DeltaH("min") - 3.4) / (this.DeltaS("min") + RlnK));
                theReturn += -272.9;  // Kelvin to Centigrade
                theReturn += 7.21 * Math.log(this.saltConcentration / 1000);
                theReturn = Math.round(theReturn);
            } else {
                theReturn = 1000 * ((this.DeltaH("max") - 3.4) / (this.DeltaS("max") + RlnK));
                theReturn += -272.9; // Kelvin to Centigrade
                theReturn += 7.21 * Math.log(this.saltConcentration / 1000);
                theReturn = Math.round(theReturn);
            }
        } else {
            this.RlogK = "";
        }
        return theReturn;
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
}]);