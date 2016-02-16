using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace MBBVL.Models {
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser {

        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
    }
    public class Shipping {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ShippingId { get; set; }
        public DateTime ShippingDate { get; set; }
        [Required]
        [Display(Name = "Full Name")]
        public string FullName { get; set; }
        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        [Required]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        [Display(Name = "Institution")]
        public string Institution { get; set; }
        [Display(Name = "Shipping Address")]
        public string ShippingAddress { get; set; }
        [Display(Name = "Phone")]
        public string Phone { get; set; }
        [Display(Name = "Extention")]
        public string Extention { get; set; }
        [Required]
        [Display(Name = "Email")]
        [EmailAddress]
        public string Email { get; set; }
        public Guid UserId { get; set; }
    }
    public class PickUp {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int PickUpId { get; set; }
        public DateTime PickUpDate { get; set; }

        [Display(Name = "Full Name")]
        public string FullName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Display(Name = "Institution")]
        public string Institution { get; set; }
        [Display(Name = "Pickup Address")]
        public string ShippingAddress { get; set; }
        [Display(Name = "Phone")]
        public string Phone { get; set; }
        public string Room {get;set;}

        public string Notes { get; set; }

        public string Message { get; set; }
        [Display(Name = "Email")]
        [EmailAddress]
        public string Email { get; set; }
        public Guid UserId { get; set; }
    }

    public class Billing {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int BillingId { get; set; }

        [Display(Name = "Quote no")]
        public string Quotenumber { get; set; }
        [Required]
        [Display(Name = "Full Name")]
        public string FullName { get; set; }
        [Required]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        [Required]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        [Display(Name = "Institution")]
        public string Institution { get; set; }
        [Display(Name = "Billing Address")]
        public string BillingAddress { get; set; }
        [Display(Name = "Billing Address")]
        public string BillingPhone { get; set; }
        [Display(Name = "Extention")]
        public string Extention { get; set; }
      
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }
        public string Notes { get; set; }
        public Guid UserId { get; set; }

    }
    public class Oligosequence {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int SequenceId { get; set; }
        [Required]
        [Display(Name = "Primer Name")]
        public string PrimerName { get; set; }
        [Display(Name = "QTY")]
        public int Qty { get; set; }
        [Display(Name = "Oligonucleotide Sequence")]
        
        public string OligonucleotideSequence { get; set; }

        public string OligonucleotideSequenceValue { get; set; }
        [Display(Name = "Synthesis Scale1 (μmole)")]
        public string SynthesisScaleValue { get; set; }
        [Display(Name = "GMP2(Y/N)")]
        public bool GMP2 { get; set; }
        [Display(Name = "Modification")]
        public string Modification { get; set; }
        [Display(Name = "Modification Values")]
        public string ModificationValue { get; set; }
        [Display(Name = "Final Delivery")]
        public string FinalDeliveryFormValue { get; set; }
        [Display(Name = "Purification")]
        public string PurificationValue { get; set; }
        [Display(Name = "Price")]
        public string Price { get; set; }
        public Guid UserId { get; set; }

    }

    public class SequencingModel {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int SequencingId { get; set; }
        [Required]
        [Display(Name = "Sample Name")]
        public string SampleName { get; set; }
        [Display(Name = "SampleCon")]
        public string SampleCon { get; set; }
        [Display(Name = "Vector Name or PCR Product")]
        public string VectorName { get; set; }
        [Display(Name = "Length")]
        public string Length { get; set; }
        [Display(Name = "Primer Name")]
        public string PrimerName { get; set; }
        [Display(Name = "Primer Conc.2 ")]
        public string PrimerConc { get; set; }
        [Display(Name = "GMP3")]
        public string GMP3 { get; set; }
        public string GmpValue { get; set; }

        public Guid UserId { get; set; }

    }
    public class CustomPrimers {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int CustomPrimerId { get; set; }
        [Required]
        [Display(Name = "Primer Name")]
        public string PrimerName { get; set; }
        [Display(Name = "Scale")]
        public string ScaleValue { get; set; }
        [Display(Name = "Sequence")]
        public string Sequence { get; set; }
        [Display(Name = "GMP")]
        public string GmpValue { get; set; }
        public Guid UserId { get; set; }

    }

    public class DataDeliveryOptions {

        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int DataDeliveryId { get; set; }
        public string Name { get; set; }

        public string Value { get; set; }
    }
    //public class DataDeliveryOptions {
    //    [Key]
    //    [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
    //    public int DataDeliveryId { get; set; }
    //    [Display(Name = "($5.00) Unedited Sequence Results [Chromatogram Trace]")]
    //    public string UneditedChromatogramTrace { get; set; }

    //    [Display(Name = "($10.00) Edited sequence results [Text Data]")]
    //    public string EditedTextData { get; set; }
    //    [Display(Name = "($10.00) Edited Sequence Results [Text Data + Chromatogram Trace]")]
    //    public string TextDataAndChromatogramTrace { get; set; }
    //    [Display(Name = "($5.00) Unedited Sequence Results [Text + Chromatogram Trace]")]
    //    public string UneditedTextAndChromatogramTrace { get; set; }

    //    public Guid UserId { get; set; }
    //}

    public class OrderForm {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int ShippingId { get; set; }
        public int OrderFormId { get; set; }
        public int BillingId { get; set; }
        public Guid UserId { get; set; }
    }
    public class WrapperModel {
        public Shipping shipping { get; set; }
        public Billing billing { get; set; }
        public List<Oligosequence> oligosequence { get; set; }
    }


    public class SequencingWrapperModel {
        public bool IsShipping { get; set; }
        public bool IsPrimer { get; set; }
        public PickUp PickUp { get; set; }
        public Billing Billing { get; set; }

        public DataDeliveryOptions DataDeliveryOptions { get; set; }
        public List<SequencingModel> sequencingModel { get; set; }
        public List<CustomPrimers> customPrimers { get; set; }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser> {
        public ApplicationDbContext()
            : base("DefaultConnection") {
        }
        public DbSet<Shipping> Shipping { get; set; }
        public DbSet<PickUp> PickUp { get; set; }
        public DbSet<Billing> Billing { get; set; }
        public DbSet<Oligosequence> Oligosequence { get; set; }
        public DbSet<OrderForm> OrderForm { get; set; }
        public DbSet<SequencingModel> SequencingModel { get; set; }
        public DbSet<DataDeliveryOptions> dataDeliveryOptions { get; set; }
        public DbSet<CustomPrimers> CustomPrimers { get; set; }

    }
}